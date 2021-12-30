import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FollowersList from '../FollowersList'

const MockFollowersList = async () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe( "Followers List", () => {

  beforeEach( () => {
    console.log( 'Running before each test' )
  } )

  beforeAll( () => {
    console.log( 'Running once before all tests' )
  } )

  afterEach( () => {
    console.log( 'Running after each test' )
  } )

  afterAll( () => {
    console.log( 'Running once after all test' )
  } )



  it( 'should render follower items', async () => {
    render( <MockFollowersList /> )
    const followerDivElement = await screen.findByTestId( 'follower-item-0' )
    expect( followerDivElement ).toBeInTheDocument()
  } )

} )