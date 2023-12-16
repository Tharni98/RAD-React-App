import React, {Component} from "react";
import {NavBar} from "../NavBar/NavBar";
import {MainContent} from "../MainContent/MainContent";
import {Footer} from "../Fotter/Footer";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <MainContent/>
                <Footer/>
            </>
        );
    }
}