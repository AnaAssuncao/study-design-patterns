import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// import NotFound from '../Components/NotFound/NotFound'
import List from '../Components/List/List'

import Singleton from '../Patterns/Singleton/Singleton'
import Prototype from '../Patterns/Prototype/Prototype';
import Provider from '../Patterns/Provider/Provider';
import Proxy from '../Patterns/Proxy/Proxy';
import Container from '../Patterns/Container/Container';
import Observer from '../Patterns/Observer/Observer';
import Module from '../Patterns/Module/Module';
import Mixin from '../Patterns/Mixin/Mixin';
import Mediator from '../Patterns/Mediator/Mediator';
import HOC from '../Patterns/HOC/HOC';
import RenderProps from '../Patterns/RenderProps/RenderProps';
import Hooks from '../Patterns/Hooks/Hooks';
import Flyweight from '../Patterns/Flyweight/Flyweight';
import Factory from '../Patterns/Factory/Factory';
import Compound from '../Patterns/Compound/Compound';
import Command from '../Patterns/Command-patterns/Command-patterns';

export default function Layout() {
  return (
    <div>
      <Link className="list-item" to={"/"}><p >Home</p></Link>
      <Routes>
        <Route path={""} element={<List />} />
        <Route path={"/Singleton"} element={<Singleton />} />
        <Route path={"/Prototype"} element={<Prototype />} />
        <Route path={"/Provider"} element={<Provider />} />
        <Route path={"/Proxy"} element={<Proxy />} />
        <Route path={"/Container"} element={<Container />} />
        <Route path={"/Observer"} element={<Observer />} />
        <Route path={"/Module"} element={<Module />} />
        <Route path={"/Mixin"} element={<Mixin />} />
        <Route path={"/Mediator"} element={<Mediator />} />
        <Route path={"/HOC"} element={<HOC />} />
        <Route path={"/Render"} element={<RenderProps />} />
        <Route path={"/Hooks"} element={<Hooks />} />
        <Route path={"/Flyweight"} element={<Flyweight />} />
        <Route path={"/Factory"} element={<Factory />} />
        <Route path={"/Compound"} element={<Compound />} />
        <Route path={"/Command"} element={<Command />} />
      </Routes>
    </div>

  );
};
