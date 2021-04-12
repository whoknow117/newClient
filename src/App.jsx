import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";

const App = observer(()  =>{

    const {user, device} = useContext(Context)
    // const [loading,setLoading] = useState(true)


    const [value,setValue] = useState("")
    useEffect(()=> {

           check().then(data => {
               user.setIsAuth(true)
               user.setUser (true)
           }).finally(() => console.log('App'))




    },[])




    return (
        <BrowserRouter>

                <NavBar/>
                <AppRouter value={value} setValue={setValue}/>

        </BrowserRouter>
    );
})

export default App;