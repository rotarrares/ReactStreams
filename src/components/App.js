import React from "react";
import {Router, Route} from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamEdit from "./Streams/StreamEdit";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import history from "../history";
const App = () => {
    return (<div>
        <CssBaseline />
        <Router history={history}>
        <Header/>
            <Route path="/" exact component={StreamList}></Route>
            <Route path="/streams/show" exact component={StreamShow}></Route>
            <Route path="/streams/new" exact component={StreamCreate}></Route>
            <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
            <Route path="/streams/delete:id" exact component={StreamDelete}></Route>
        </Router>
    </div>);

}

export default App;