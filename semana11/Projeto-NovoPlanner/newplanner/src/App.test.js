import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

describe('Testando planner de tarefas', () =>{
  test('Testa form submit', ()=>{
    const  {getByPlaceholderText, getByText} = render(<App />)
    const inputPlace = getByPlaceholderText('Nova Tarefa');
    fireEvent.change(inputPlace,{target:{value:"Tarefa"}});
    const createButton = getByText(/Criar/i);
    fireEvent.click(createButton);
    expect(getByText(/Nova Tarefa/)).toBeInTheDocument()
  });
  test('Criando tarefa',()=>{
    const {getByPlaceholderText}= render(<App />)

    const input = getByPlaceholderText('Nova Tarefa')

    fireEvent.change(input,{target:{value:'tarefa teste'}})
    expect(input).toHaveValue('tarefa teste')
  });
  test('Deletando tarefa',()=>{
    const {getByText} = render(<App />)

    const del = getByText(/delete/i);
    fireEvent.click(del)
    expect(getByText(/delete/i)).toBeInTheDocument()

  })

})


