import { Switch, Route } from 'react-router-dom';
import React from 'react';
import PageDetail from './PageDetail/PageDatail';
import CssModulePage from './CssModulePage/CssModulePage';
import PageHome from './PageHome/PageHome';
import PageList from './PageList/PageList';
import Page404 from './Page404/Page404';

function Routes(){
    return(
        <Switch>
            <Route path={'/'} exact><PageHome /> </Route>
            <Route path={'/detail'}><PageDetail /></Route>
            <Route path={'/css-module'}> <CssModulePage /></Route>
            <Route path={'/list'}><PageList /></Route>
            <Route path={'*'}><Page404 /></Route>
        </Switch>
    )
}
  
export default Routes;