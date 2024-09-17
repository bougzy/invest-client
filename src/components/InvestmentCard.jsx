// import React, { useState } from 'react';
// import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
// import { FaCopy } from 'react-icons/fa';

// const plans = [
//   { name: 'Basic Plan', roi: '5%', wallet: '1AbcCryptoWalletBasic' },
//   { name: 'Premium Plan', roi: '10%', wallet: '1DefCryptoWalletPremium' },
//   { name: 'Ultimate Plan', roi: '15%', wallet: '1GhiCryptoWalletUltimate' },
// ];

// function InvestmentCard() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   const handleInvestClick = (plan) => {
//     setSelectedPlan(plan);
//     setShowModal(true);
//   };

//   const handleCopy = (wallet) => {
//     navigator.clipboard.writeText(wallet);
//     alert('Wallet address copied!');
//   };

//   const handleClose = () => setShowModal(false);

//   return (
//     <div className="container">
//       <Row>
//         {plans.map((plan, index) => (
//           <Col md={4} key={index} className="mb-4">
//             <Card className="h-100 text-center shadow" style={{ borderRadius: '10px' }}>
//               <Card.Body>
//                 <Card.Title>{plan.name}</Card.Title>
//                 <Card.Text>ROI: {plan.roi}</Card.Text>
//                 <Button variant="primary" onClick={() => handleInvestClick(plan)}>
//                   Invest Now
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Modal for Investment */}
//       {selectedPlan && (
//         <Modal show={showModal} onHide={handleClose} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>Invest in {selectedPlan.name}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p>Please proceed to make your deposit:</p>
//             <p>
//               Wallet Address: <strong>{selectedPlan.wallet}</strong>
//             </p>
//             <Button variant="outline-secondary" onClick={() => handleCopy(selectedPlan.wallet)}>
//               <FaCopy /> Copy to Clipboard
//             </Button>
//             <div className="mt-3">
//               <Button variant="success" onClick={handleClose}>
//                 Make Deposit
//               </Button>
//             </div>
//           </Modal.Body>
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default InvestmentCard;




import React, { useState } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
import { FaCopy } from 'react-icons/fa';

const plans = [
  { 
    name: 'Basic Plan', 
    roi: '5%', 
    amountRange: '100 - 500 USD', 
    wallet: '1AbcCryptoWalletBasic' 
  },
  { 
    name: 'Premium Plan', 
    roi: '10%', 
    amountRange: '500 - 5000 USD', 
    wallet: '1DefCryptoWalletPremium' 
  },
  { 
    name: 'Ultimate Plan', 
    roi: '15%', 
    amountRange: '5000 USD and above', 
    wallet: '1GhiCryptoWalletUltimate' 
  },
];

function InvestmentCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleInvestClick = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleCopy = (wallet) => {
    navigator.clipboard.writeText(wallet);
    alert('Wallet address copied!');
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container">
      <Row>
        {plans.map((plan, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 text-center shadow" style={{ borderRadius: '10px' }}>
              <Card.Body>
                <Card.Title>{plan.name}</Card.Title>
                <Card.Text>ROI: {plan.roi}</Card.Text>
                <Card.Text>Investment Range: {plan.amountRange}</Card.Text>
                <Button variant="primary" onClick={() => handleInvestClick(plan)}>
                  Invest Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Investment */}
      {selectedPlan && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Invest in {selectedPlan.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please proceed to make your deposit:</p>
            <p>
              Wallet Address: <strong>{selectedPlan.wallet}</strong>
            </p>
            <Button variant="outline-secondary" onClick={() => handleCopy(selectedPlan.wallet)}>
              <FaCopy /> Copy to Clipboard
            </Button>
            <div className="mt-3">
              <Button variant="success" onClick={handleClose}>
                Make Deposit
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default InvestmentCard;

