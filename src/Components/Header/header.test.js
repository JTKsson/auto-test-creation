import Header from "."
import {render, screen} from "@testing-library/react"

test("There's an H1 tag rendered in the Header component with content", () => {
  render(<Header title="Sith Showdown" subTitle="The ultimate Sith Villian Showdown"/>)

  const pageTitle = screen.getByRole("heading", {level: 1})
  const pageSubTitle = screen.getByRole("heading", {level: 2})

  expect(pageTitle).toBeInTheDocument()
  expect(pageTitle).toHaveTextContent(/sith showdown/i)
  expect(pageSubTitle).toBeInTheDocument()
  expect(pageSubTitle).toHaveTextContent(/The ultimate Sith Villian Showdown/i)

})