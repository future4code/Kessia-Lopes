import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "tesnting-library/jest-dom/extend-expect";
import App from './App';

describe('Testando planner de tarefas', () =>{
  it('Testa form submit', ()=>{
    const {getByTestId, getByPlaceholderText, getByText} = render(<App />)
    const inputPlace = getByPlaceholderText('Nova Tarefa');
    const createButton = getByText(/Criar Tarefa/i);
    fireEvent.change(inputPlace,{target:{value:"Tarefa"}});
    fireEvent.click(createButton);
    expect(inputPlace.value).toEqual("Tarefa")
  });

})


