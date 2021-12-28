<<<<<<< HEAD
import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput"

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
    it('should render input element', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });
    
    it('should be able to type into input', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });
    
    it('should be able to type into input', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        expect(mockedSetTodo).toBeCalled()
    });
    
    it('should have empty input when add button is cliked', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    });
})
=======
import { render, screen, fireEvent } from '@testing-library/react'
import AddInput from '../AddInput'

const mockedSetTodo = jest.fn()

describe( 'AddInput', () => {

  it( 'should render input element', async () => {
    render( <AddInput todos={ [] } setTodos={ mockedSetTodo } /> )
    const inputElement = screen.getByPlaceholderText( /Add a new task here.../i )
    expect( inputElement ).toBeInTheDocument()
  } )

  it( 'should be able to type into input', async () => {
    render( <AddInput todos={ [] } setTodos={ mockedSetTodo } /> )
    const inputElement = screen.getByPlaceholderText( /Add a new task here.../i )
    fireEvent.change( inputElement, { target: { value: 'Go grocery shopping' } } )
    expect( inputElement.value ).toBe( 'Go grocery shopping' )
  } )

  it( 'should have empty input when add button is clicked', async () => {
    render( <AddInput todos={ [] } setTodos={ mockedSetTodo } /> )
    const inputElement = screen.getByPlaceholderText( /Add a new task here.../i )
    const buttonElement = screen.getByRole( 'button', { name: /Add/i } )
    fireEvent.change( inputElement, { target: { value: 'Go grocery shopping' } } )
    fireEvent.click( buttonElement )
    expect( inputElement.value ).toBe( '' )
  } )

} )
>>>>>>> 01-Starter-Project
