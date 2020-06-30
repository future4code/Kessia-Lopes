import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Novo post criado ao clicar no botão", () =>{
    const {getByTestId, getByText, getByPlaceholderText} = render(<App />)
    const inputPost = getByPlaceholderText("Novo Post")
    const botao = getByText(/Adicionar/i)

fireEvent.change(inputPost, {target:{value: "oi"}})
fireEvent.click(botao)

expect(getByTestId("postcard")).toBeInDocument();

});