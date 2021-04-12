import React, {useContext, useEffect, useState} from 'react';
import classes from './TypeBar.module.scss';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {SUBCATEGORY_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";
import {fetchCategories, fetchTypes} from "../../http/deviceApi";
import Electric from "../../assets/Electric/Electric";
import Shovel from "../../assets/Shovel/Shovel";
import Drill from "../../assets/Drill/Drill";
import Boiler from "../../assets/Boiler/Boiler";
import Garden from "../../assets/Garden/Garden";
import Gas from "../../assets/Gas/Gas";
import Hose from "../../assets/Hose/Hose";
import Pump from "../../assets/Pump/Pump";
import Ventilation from "../../assets/Ventilation/Ventilation";
import Carts from "../../assets/Carts/Carts";
import Fasteners from "../../assets/Fasteners/Fasteners";
import Logo from "../../assets/Logo/Logo";


const TypeBar = observer(({collapse}) => {


    const sidebarIcons = [
        {id: '1', icon: <Drill/>},
        {id: '2', icon: <Boiler/>},
        {id: '3', icon: <Electric/>},
        {id: '4', icon: <Garden/>},
        {id: '5', icon: <Gas/>},
        {id: '6', icon: <Hose/>},
        {id: '7', icon: <Pump/>},
        {id: '8', icon: <Shovel/>},
        {id: '9', icon: <Ventilation/>},
        {id: '10', icon: <Carts/>},
        {id: '11', icon: <Fasteners/>},
        {id: '12', icon: <Fasteners/>},
        {id: '13', icon: <Carts/>},

    ]

    const history = useHistory()

    const {device} = useContext(Context)
    const [mode, setMode] = useState(false)
    const [gear,setGear] = useState(false)

    const setModeCallback = (type) => {
        device.selectedCategory(type)
        setMode(true)
    }
    useEffect(() => {

        fetchTypes().then(data => device.setTypes(data))
        fetchCategories().then(data => device.setCategories(data))
    }, [device.activeBar])

    return (
        <div className={`${classes.menu} ${collapse ? classes.offsetMode : ""}`}>

            <ul className={classes.list}>
                {device.categories.map((category, idx) =>

                    <li

                        className={`${classes.item} ${category.id === device.selectedCategory.id ? classes.active : ""}`}
                        // onClick={() => device.setSelectedCategory(category)}
                        style={{cursor: 'pointer', textAlign: 'left'}}
                        onMouseOver={() => {
                            device.setSelectedCategory(category)
                            setMode(true)
                        }}
                        onBlur={() => setMode(false)}
                        key={category.id}
                    >

                        <div className={classes.icon}>
                            {sidebarIcons[idx].icon}
                        </div>
                        {category.name}

                    </li>
                )}
            </ul>
            {mode ?
                <div
                    onMouseOver={() => setMode(true)}
                    onMouseLeave={() => setMode(false)}
                    className={`${classes.dropdown} ${collapse ? classes.activeDrop : ""}`}
                >
                    {device.types.map((type, idx) => {


                        if (type.categoryId === device.selectedCategory.id) {
                            return <div
                                onMouseOver={() => {setGear(true)}}
                                onMouseLeave={() => {setGear(false)}}
                                className={classes.DropItem}
                                onClick={() => {
                                    device.setValue("")
                                    history.push(SUBCATEGORY_ROUTE + '/' + type.id)
                                    device.setSelectedType(type)
                                }}
                                key={type.id}
                            >


                                {type.name}

                                {gear ? <span className={classes.gear}><Logo/></span>: ""}
                            </div>
                        }
                    })}
                </div>
                :
                ""
            }
        </div>
    );
});

export default TypeBar;