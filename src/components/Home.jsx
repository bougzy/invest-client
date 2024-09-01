
// import React from 'react';
// import { Card, Container, Row, Col, Button, Carousel } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import alex from "../assets/alex.jpeg"
// import cal from "../assets/cal.jpeg"
// import davi from "../assets/davi.jpeg"
// import hith from "../assets/hith.jpeg"

// const Home = () => {
//   const navigate = useNavigate();

//   const handleInvestClick = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <Container className="my-4 flex-grow-1">
//         {/* Scrolling text for cryptocurrency prices */}
//         <div className="crypto-marquee">
//           <span>
//             <strong>Bitcoin (BTC):</strong> $30,000 | 
//             <strong> Ethereum (ETH):</strong> $1,800 | 
//             <strong> Binance Coin (BNB):</strong> $350 |
//             <strong> Cardano (ADA):</strong> $0.50 | 
//             <strong> Solana (SOL):</strong> $20.00 | 
//             <strong> Ripple (XRP):</strong> $0.60
//           </span>
//         </div>

//         {/* Investment Plans */}
//         <Row className="mt-4">
//           <Col md={4}>
//             <Card className="mb-4 border-primary shadow-sm investment-card">
//               <Card.Body>
//                 <Card.Title>Basic Plan</Card.Title>
//                 <Card.Text>
//                   Invest with minimal features. Ideal for beginners.
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Returns:</strong> 5% annually
//                 </Card.Text>
//                 <Button variant="primary" onClick={handleInvestClick}>
//                   Invest Now
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="mb-4 border-primary shadow-sm investment-card">
//               <Card.Body>
//                 <Card.Title>Standard Plan</Card.Title>
//                 <Card.Text>
//                   Includes additional features for experienced investors.
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Returns:</strong> 10% annually
//                 </Card.Text>
//                 <Button variant="primary" onClick={handleInvestClick}>
//                   Invest Now
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="mb-4 border-primary shadow-sm investment-card">
//               <Card.Body>
//                 <Card.Title>Premium Plan</Card.Title>
//                 <Card.Text>
//                   The most comprehensive plan with premium features.
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Returns:</strong> 15% annually
//                 </Card.Text>
//                 <Button variant="primary" onClick={handleInvestClick}>
//                   Invest Now
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* Meet Our Team Section */}
//        {/* Meet Our Team Section */}
//        <section className="team-section mt-5">
//           <h2 className="text-center">Meet Our Team</h2>
//           <Row className="mt-4">
//             <Col md={3}>
//               <Card className="mb-4 shadow-sm team-card">
//                 <Card.Img variant="top" src={alex} alt="Alexander Lorenzo" />
//                 <Card.Body className="text-center">
//                   <Card.Title>Alexander Lorenzo</Card.Title>
//                   <Card.Text>Trade Captain</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={3}>
//               <Card className="mb-4 shadow-sm team-card">
//                 <Card.Img variant="top" src={davi} alt="Davinci Jeremie" />
//                 <Card.Body className="text-center">
//                   <Card.Title>Davinci Jeremie</Card.Title>
//                   <Card.Text>Trade Consultant</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={3}>
//               <Card className="mb-4 shadow-sm team-card">
//                 <Card.Img variant="top" src={hith} alt="Hither Mann" />
//                 <Card.Body className="text-center">
//                   <Card.Title>Hither Mann</Card.Title>
//                   <Card.Text>HR Consultant</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={3}>
//               <Card className="mb-4 shadow-sm team-card">
//                 <Card.Img variant="top" src={cal} alt="Calvin Hill" />
//                 <Card.Body className="text-center">
//                   <Card.Title>Calvin Hill</Card.Title>
//                   <Card.Text>Financial Advisor</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </section>
//       </Container>

//       {/* Benefits Section */}
//       <Container>
//         <section className="benefits-section mt-5 text-center">
//           <h2>Why Choose Us?</h2>
//           <p className="lead">
//             We offer a comprehensive suite of investment tools and resources to help you achieve your financial goals. Here’s why our clients trust us:
//           </p>
//           <Row className="mt-4">
//             <Col md={4}>
//               <Card className="mb-4 shadow-sm">
//                 <Card.Body>
//                   <Card.Title>Expert Advice</Card.Title>
//                   <Card.Text>
//                     Get personalized advice from seasoned professionals who understand the market.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="mb-4 shadow-sm">
//                 <Card.Body>
//                   <Card.Title>Flexible Plans</Card.Title>
//                   <Card.Text>
//                     We offer a variety of plans to suit all investment strategies and risk tolerances.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="mb-4 shadow-sm">
//                 <Card.Body>
//                   <Card.Title>Secure Investments</Card.Title>
//                   <Card.Text>
//                     Your investments are protected with state-of-the-art security measures.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </section>

//         {/* Testimonials Section */}
//         <section className="testimonials-section mt-5 text-center">
//           <h2>What Our Clients Say</h2>
//           <p className="lead">
//             Hear from some of our satisfied clients who have seen incredible returns on their investments.
//           </p>
//           <Carousel className="mb-4">
//             <Carousel.Item>
//               <blockquote className="blockquote">
//                 <p className="mb-0">
//                   "Investing with this platform has been a game-changer for me. I've seen great returns and couldn't be happier!"
//                 </p>
//                 <footer className="blockquote-footer">
//                   John Doe, <cite title="Source Title">New York</cite>
//                 </footer>
//               </blockquote>
//             </Carousel.Item>
//             <Carousel.Item>
//               <blockquote className="blockquote">
//                 <p className="mb-0">
//                   "The team is incredibly supportive and the platform is so easy to use. Highly recommend!"
//                 </p>
//                 <footer className="blockquote-footer">
//                   Jane Smith, <cite title="Source Title">London</cite>
//                 </footer>
//               </blockquote>
//             </Carousel.Item>
//             <Carousel.Item>
//               <blockquote className="blockquote">
//                 <p className="mb-0">
//                   "I've tried other investment platforms, but this one is by far the best. Excellent service and results!"
//                 </p>
//                 <footer className="blockquote-footer">
//                   Alex Johnson, <cite title="Source Title">Sydney</cite>
//                 </footer>
//               </blockquote>
//             </Carousel.Item>
//           </Carousel>
//         </section>

//         {/* Call to Action Section */}
//         <section className="cta-section mt-5 text-center">
//           <h2>Ready to Start Investing?</h2>
//           <p className="lead">
//             Join thousands of satisfied investors and secure your financial future. It's time to take control of your finances.
//           </p>
//           <Button className="mb-3" variant="success" size="lg" onClick={handleInvestClick}>
//             Join Now
//           </Button>
//         </section>
//       </Container>

//       {/* Footer Section */}
//       <footer className="bg-dark text-white text-center py-3 mt-auto">
//         <Container>
//           <Row>
//             <Col>
//               <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
//               <p className="mb-0">Follow us on 
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ms-2">Twitter</a>, 
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white ms-2">Facebook</a>, 
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white ms-2">LinkedIn</a>
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     </div>
//   );
// };

// export default Home;




// import React from 'react';
// import { Card, Container, Row, Col, Button, Carousel } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import alex from "../assets/alex.jpeg";
// import cal from "../assets/cal.jpeg";
// import davi from "../assets/davi.jpeg";
// import hith from "../assets/hith.jpeg";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleInvestClick = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <Container className="my-4 flex-grow-1">

//         {/* Hero Section with Carousel Slider */}
//         <Carousel className="mb-4">
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={alex}
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h3>Invest with Confidence</h3>
//               <p>Explore our flexible investment plans to grow your wealth.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={cal}
//               alt="Second slide"
//             />
//             <Carousel.Caption>
//               <h3>Expert Financial Guidance</h3>
//               <p>Our team of experts is here to guide you every step of the way.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={davi}
//               alt="Third slide"
//             />
//             <Carousel.Caption>
//               <h3>Diversify Your Portfolio</h3>
//               <p>Choose from a range of assets including forex, cryptocurrencies, and more.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>

//         {/* Scrolling text for cryptocurrency prices */}
//         <div className="crypto-marquee">
//           <span>
//             <strong>Bitcoin (BTC):</strong> $30,000 | 
//             <strong> Ethereum (ETH):</strong> $1,800 | 
//             <strong> Binance Coin (BNB):</strong> $350 |
//             <strong> Cardano (ADA):</strong> $0.50 | 
//             <strong> Solana (SOL):</strong> $20.00 | 
//             <strong> Ripple (XRP):</strong> $0.60
//           </span>
//         </div>

//         {/* Investment Plans */}
//         <Row className="mt-4">
//           <Col md={4}>
//             <Card className="mb-4 border-primary shadow-sm investment-card">
//               <Card.Body>
//                 <Card.Title>Basic Plan</Card.Title>
//                 <Card.Text>
//                   Invest with minimal features. Ideal for beginners.
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Returns:</strong> 5% annually
//                 </Card.Text>
//                 <Button variant="primary" onClick={handleInvestClick}>
//                   Invest Now
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="mb-4 border-primary shadow-sm investment-card">
//               <Card.Body>
//                 <Card.Title>Standard Plan</Card.Title>
//                 <Card.Text>
//                   Includes additional features for experienced investors.
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Returns:</strong> 10% annually
//                 </Card.Text>
//                 <Button variant="primary" onClick={handleInvestClick}>
//                   Invest Now
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="mb-4 border-primary shadow-sm investment-card">
//               <Card.Body>
//                 <Card.Title>Premium Plan</Card.Title>
//                 <Card.Text>
//                   The most comprehensive plan with premium features.
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Returns:</strong> 15% annually
//                 </Card.Text>
//                 <Button variant="primary" onClick={handleInvestClick}>
//                   Invest Now
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* About Section */}
//         <section className="about-section mt-5 text-center">
//           <h2>About JP Morgan FX</h2>
//           <p className="lead">
//             JP Morgan FX is a leading investment platform specializing in forex trading and cryptocurrency investments. 
//             Our mission is to provide our clients with the tools and expertise they need to achieve financial success. 
//             With a focus on transparency, security, and innovation, we are committed to helping you navigate the complex world of trading.
//           </p>
//           <p>
//             Our platform offers a range of investment plans tailored to meet the diverse needs of our clients, from beginners 
//             looking to start their investment journey to seasoned investors seeking high-return opportunities. 
//             Join us today and take the first step towards financial freedom.
//           </p>
//         </section>

//         {/* Meet Our Team Section */}
//         <section className="team-section mt-5">
//           <h2 className="text-center">Meet Our Team</h2>
//           <Row className="mt-4">
//             <Col md={3}>
//               <Card className="mb-4 shadow-sm team-card">
//                 <Card.Img variant="top" src={alex} alt="Alexander Lorenzo" />
//                 <Card.Body className="text-center">
//                   <Card.Title>Alexander Lorenzo</Card.Title>
//                   <Card.Text>Trade Captain</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={3}>
//               <Card className="mb-4 shadow-sm team-card">
//                 <Card.Img variant="top" src={davi} alt="Davinci Jeremie" />
//                 <Card.Body className="text-center">
//                   <Card.Title>Davinci Jeremie</Card.Title>
//                   <Card.Text>Trade Consultant</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={3}>
//               <Card className="mb-4 shadow-sm team-card">
//                 <Card.Img variant="top" src={hith} alt="Hither Mann" />
//                 <Card.Body className="text-center">
//                   <Card.Title>Hither Mann</Card.Title>
//                   <Card.Text>HR Consultant</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={3}>
//               <Card className="mb-4 shadow-sm team-card">
//                 <Card.Img variant="top" src={cal} alt="Calvin Hill" />
//                 <Card.Body className="text-center">
//                   <Card.Title>Calvin Hill</Card.Title>
//                   <Card.Text>Financial Advisor</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </section>

//         {/* Benefits Section */}
//         <Container>
//           <section className="benefits-section mt-5 text-center">
//             <h2>Why Choose Us?</h2>
//             <p className="lead">
//               We offer a comprehensive suite of investment tools and resources to help you achieve your financial goals. Here’s why our clients trust us:
//             </p>
//             <Row className="mt-4">
//               <Col md={4}>
//                 <Card className="mb-4 shadow-sm">
//                   <Card.Body>
//                     <Card.Title>Expert Advice</Card.Title>
//                     <Card.Text>
//                       Get personalized advice from seasoned professionals who understand the market.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col md={4}>
//                 <Card className="mb-4 shadow-sm">
//                   <Card.Body>
//                     <Card.Title>Flexible Plans</Card.Title>
//                     <Card.Text>
//                       We offer a variety of plans to suit all investment strategies and risk tolerances.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col md={4}>
//                 <Card className="mb-4 shadow-sm">
//                   <Card.Body>
//                     <Card.Title>Secure Investments</Card.Title>
//                     <Card.Text>
//                       Your investments are protected with state-of-the-art security measures.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </section>

//           {/* Testimonials Section */}
//           <section className="testimonials-section mt-5 text-center">
//             <h2>What Our Clients Say</h2>
//             <p className="lead">
//               Hear from some of our satisfied clients who have seen incredible returns on their investments.
//             </p>
//             <Carousel className="mb-4">
//               <Carousel.Item>
//                 <blockquote className="blockquote">
//                   <p className="mb-0">
//                     "Investing with this platform has been a game-changer for me. I've seen great returns and couldn't be happier!"
//                   </p>
//                   <footer className="blockquote-footer">
//                     John Doe, <cite title="Source Title">New York</cite>
//                   </footer>
//                 </blockquote>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <blockquote className="blockquote">
//                   <p className="mb-0">
//                     "The team is incredibly supportive and the platform is so easy to use. Highly recommend!"
//                   </p>
//                   <footer className="blockquote-footer">
//                     Jane Smith, <cite title="Source Title">London</cite>
//                   </footer>
//                 </blockquote>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <blockquote className="blockquote">
//                   <p className="mb-0">
//                     "I started with the Basic Plan and quickly upgraded. The growth has been impressive."
//                   </p>
//                   <footer className="blockquote-footer">
//                     Michael Johnson, <cite title="Source Title">Sydney</cite>
//                   </footer>
//                 </blockquote>
//               </Carousel.Item>
//             </Carousel>
//           </section>
//         </Container>
//       </Container>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Card, Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import alex from "../assets/alex.jpeg";
import cal from "../assets/cal.jpeg";
import davi from "../assets/davi.jpeg";
import hith from "../assets/hith.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const handleInvestClick = () => {
    navigate('/login');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="my-4 flex-grow-1">

        {/* Hero Section with Carousel Slider */}
        <Carousel className="mb-4">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?b=1&s=612x612&w=0&k=20&c=bpQMsH07ziELXla0SZJt84-w0JkxsVXs05c7T2Iygks="
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Invest with Confidence</h3>
              <p>Explore our flexible investment plans to grow your wealth.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://media.istockphoto.com/id/1358050964/photo/successful-businessman-looking-out-of-the-window-on-late-evening-modern-hedge-fund-investor.jpg?b=1&s=612x612&w=0&k=20&c=5JvQ0se7Dd5zBrOPkLgjoGbEckFG7gf9Z3px-CjQ1Ac="
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Expert Financial Guidance</h3>
              <p>Our team of experts is here to guide you every step of the way.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?b=1&s=612x612&w=0&k=20&c=7rCLdLKsiflXsLWf59S6w0u_rSPQZ9bqyspLqn8o8jg="
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Diversify Your Portfolio</h3>
              <p>Choose from a range of assets including forex, cryptocurrencies, and more.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Scrolling text for cryptocurrency prices */}
        <div className="crypto-marquee">
          <span>
            <strong>Bitcoin (BTC):</strong> $30,000 | 
            <strong> Ethereum (ETH):</strong> $1,800 | 
            <strong> Binance Coin (BNB):</strong> $350 |
            <strong> Cardano (ADA):</strong> $0.50 | 
            <strong> Solana (SOL):</strong> $20.00 | 
            <strong> Ripple (XRP):</strong> $0.60
          </span>
        </div>

        {/* Investment Plans */}
        <Row className="mt-4">
          <Col md={4}>
            <Card className="mb-4 border-primary shadow-sm investment-card">
              <Card.Body>
                <Card.Title>Basic Plan</Card.Title>
                <Card.Text>
                  Invest with minimal features. Ideal for beginners.
                </Card.Text>
                <Card.Text>
                  <strong>Returns:</strong> 5% annually
                </Card.Text>
                <Button variant="primary" onClick={handleInvestClick}>
                  Invest Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 border-primary shadow-sm investment-card">
              <Card.Body>
                <Card.Title>Standard Plan</Card.Title>
                <Card.Text>
                  Includes additional features for experienced investors.
                </Card.Text>
                <Card.Text>
                  <strong>Returns:</strong> 10% annually
                </Card.Text>
                <Button variant="primary" onClick={handleInvestClick}>
                  Invest Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 border-primary shadow-sm investment-card">
              <Card.Body>
                <Card.Title>Premium Plan</Card.Title>
                <Card.Text>
                  The most comprehensive plan with premium features.
                </Card.Text>
                <Card.Text>
                  <strong>Returns:</strong> 15% annually
                </Card.Text>
                <Button variant="primary" onClick={handleInvestClick}>
                  Invest Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* About Section */}
        <section className="about-section mt-5 text-center">
          <h2>About JP Morgan FX</h2>
          <p className="lead">
            JP Morgan FX is a leading investment platform specializing in forex trading and cryptocurrency investments. 
            Our mission is to provide our clients with the tools and expertise they need to achieve financial success. 
            With a focus on transparency, security, and innovation, we are committed to helping you navigate the complex world of trading.
          </p>
          <p>
            Our platform offers a range of investment plans tailored to meet the diverse needs of our clients, from beginners 
            looking to start their investment journey to seasoned investors seeking high-return opportunities. 
            Join us today and take the first step towards financial freedom.
          </p>
        </section>

        {/* Meet Our Team Section */}
        <section className="team-section mt-5">
          <h2 className="text-center">Meet Our Team</h2>
          <Row className="mt-4">
            <Col md={3}>
              <Card className="mb-4 shadow-sm team-card">
                <Card.Img variant="top" src={alex} alt="Alexander Lorenzo" />
                <Card.Body className="text-center">
                  <Card.Title>Alexander Lorenzo</Card.Title>
                  <Card.Text>Trade Captain</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-4 shadow-sm team-card">
                <Card.Img variant="top" src={davi} alt="Davinci Jeremie" />
                <Card.Body className="text-center">
                  <Card.Title>Davinci Jeremie</Card.Title>
                  <Card.Text>Trade Consultant</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-4 shadow-sm team-card">
                <Card.Img variant="top" src={hith} alt="Hither Mann" />
                <Card.Body className="text-center">
                  <Card.Title>Hither Mann</Card.Title>
                  <Card.Text>HR Consultant</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-4 shadow-sm team-card">
                <Card.Img variant="top" src={cal} alt="Calvin Hill" />
                <Card.Body className="text-center">
                  <Card.Title>Calvin Hill</Card.Title>
                  <Card.Text>Financial Advisor</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Benefits Section */}
        <Container>
          <section className="benefits-section mt-5 text-center">
            <h2>Why Choose Us?</h2>
            <p className="lead">
              We offer a comprehensive suite of investment tools and resources to help you achieve your financial goals. Here’s why our clients trust us:
            </p>
            <Row className="mt-4">
              <Col md={4}>
                <Card className="mb-4 shadow-sm">
                  <Card.Body>
                    <Card.Title>Expert Advice</Card.Title>
                    <Card.Text>
                      Get personalized advice from seasoned professionals who understand the market.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4 shadow-sm">
                  <Card.Body>
                    <Card.Title>Flexible Plans</Card.Title>
                    <Card.Text>
                      We offer a variety of plans to suit all investment strategies and risk tolerances.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4 shadow-sm">
                  <Card.Body>
                    <Card.Title>Secure Investments</Card.Title>
                    <Card.Text>
                      Your investments are protected with state-of-the-art security measures.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section mt-5 text-center">
            <h2>What Our Clients Say</h2>
            <p className="lead">
              Hear from some of our satisfied clients who have seen incredible returns on their investments.
            </p>
            <Carousel className="mb-4">
              <Carousel.Item>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    "Investing with this platform has been a game-changer for me. I've seen great returns and couldn't be happier!"
                  </p>
                  <footer className="blockquote-footer">
                    John Doe, <cite title="Source Title">New York</cite>
                  </footer>
                </blockquote>
              </Carousel.Item>
              <Carousel.Item>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    "The team is incredibly supportive and the platform is so easy to use. Highly recommend!"
                  </p>
                  <footer className="blockquote-footer">
                    Jane Smith, <cite title="Source Title">California</cite>
                  </footer>
                </blockquote>
              </Carousel.Item>
            </Carousel>
          </section>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
