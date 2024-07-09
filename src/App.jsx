import React from 'react';
import { FaCartPlus } from "react-icons/fa6";
import './Button.css';
import Button from './components/CustomButton';

function App() {
  return (
    <>
      <h1 style={{ marginLeft: "4%" }}>Buttons</h1>
      <div style={{ display: "flex" }}>
        <Button pghText="<Button />" className="default"></Button>
        <Button pghText="&:hover, &:focus" className="hover"></Button>
      </div>
      
      <div style={{ display: "flex" }}>
        <Button pghText="<Button variant=”outline” />" className="outline"></Button>
        <Button pghText="&:hover, &:focus" className="outline-hover"></Button>
      </div>
      
      <div style={{ display: "flex" }}>
        <Button pghText="<Button variant=”text” />" className="text"></Button>
        <Button pghText="&:hover, &:focus" className="no-outline"></Button>
      </div>

      <Button pghText="<Button disableShadow />" className="disabledShadow"></Button>
      
      <div style={{ display: "flex" }}>
        <Button pghText="<Button disabled />" className="disabled"></Button>
        <Button pghText="<Button variant=”text” disabled />" className="nobg-disabled"></Button>
      </div>

      <div style={{ display: "flex", width: "700px", justifyContent: "space-between" }}>
        <Button pghText="<Button startIcon=”local_grocery_store” />" className="primary cart">
          <FaCartPlus />Default
        </Button>
        <Button pghText="<Button startIcon=”local_grocery_store” />" className="primary cart">
          Default<FaCartPlus />
        </Button>
      </div>

      <div style={{ display: "flex", width: "700px", justifyContent: "space-between" }}>
        <Button pghText="<Button size=”sm” />" className="primary small">Small</Button>
        <Button pghText="<Button size=”md” />" className="primary medium">Medium</Button>
        <Button pghText="<Button size=”lg” />" className="primary large">Large</Button>
      </div>

      <div style={{ display: "flex", width: "700px", justifyContent: "space-between" }}>
        <Button pghText="<Button color=”” />" className="default">Default</Button>
        <Button pghText="<Button color=”primary” />" className="primary">Primary</Button>
        <Button pghText="<Button color=”secondary” />" className="secondary">Secondary</Button>
        <Button pghText="<Button color=”danger” />" className="danger">Danger</Button>
      </div>

      <div style={{ display: "flex", width: "700px", justifyContent: "space-between" }}>
        <Button pghText="&:hover, &:focus" className="hover">Default</Button>
        <Button className="primary-f">Primary</Button>
        <Button className="secondary-f">Secondary</Button>
        <Button className="danger-f">Danger</Button>
      </div>
    </>
  );
}

export default App;
