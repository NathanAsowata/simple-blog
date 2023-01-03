import { render, screen } from "@testing-library/react"
import Navbar from "../components/Navbar"

it('should display the logo', () => { 
    render(<Navbar />);
    const logo = screen.findByDisplayValue("Simple Blog")
    expect(logo).toBeVisible
 })

 it('should display "new post" button', () => { 
    render(<Navbar />)
    const Button = screen.findByRole("button")
    expect(Button).toBeVisible
  })