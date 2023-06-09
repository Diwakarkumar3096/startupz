import React from 'react'
import "./Category.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Category = () => {
  return (
    <section>
      <div className='catogory'>
      <h1>Explore By Catrgory</h1>
          <div className='catogorybox'>
              
               <div>
               <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                      <Card.Title>AI/Machine Learning</Card.Title>
                      <Card.Text>
                      Artificial intelligence is a broad field, which refers to the use of technologies
                       to build machines and computers that have the ability to mimic cognitive functions associated with human intelligence,
                       
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                  <div>
                  <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                  <div>
                  <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                  <div>
                  <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>
                  <div>
                  <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>

          </div>
          
      </div>

          
    </section>
    
  )
}

export default Category