// import React, { useState, useEffect } from 'react';
// import { Form, Button, Alert, Card, Spinner, Container } from 'react-bootstrap';
// import { depositFunds } from '../services/api';

// const Deposit = () => {
//   const [amount, setAmount] = useState('');
//   const [walletAddress] = useState('0x1234abcd5678efgh9012ijklmnopqrstuvwx'); // Example wallet address
//   const [copySuccess, setCopySuccess] = useState('');
//   const [error, setError] = useState('');
//   const [canDeposit, setCanDeposit] = useState(true);
//   const [loading, setLoading] = useState(true); // Initialize loading as true

//   useEffect(() => {
//     const checkDepositAvailability = () => {
//       const lastDepositDate = localStorage.getItem('lastDepositDate');
//       if (lastDepositDate) {
//         const lastDeposit = new Date(lastDepositDate);
//         const now = new Date();
//         const oneWeek = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
//         if (now - lastDeposit < oneWeek) {
//           setCanDeposit(false);
//           setError('You can only make a deposit once per week.');
//         }
//       }
//       setLoading(false); // Set loading to false after the check
//     };

//     checkDepositAvailability();
//   }, []);

//   const handleDeposit = async () => {
//     if (!canDeposit) {
//       setError('You can only make a deposit once per week.');
//       return;
//     }
//     try {
//       setLoading(true); // Show spinner while the deposit request is being processed
//       await depositFunds({ amount });
//       alert('Deposit successful!');
//       setAmount(''); // Clear the amount field
//       localStorage.setItem('lastDepositDate', new Date().toISOString()); // Update last deposit date
//       setCanDeposit(false);
//       setError('');
//     } catch (error) {
//       console.error('Error making deposit:', error);
//       setError('Error making deposit. Please try again.');
//     } finally {
//       setLoading(false); // Hide spinner once the request is complete
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(walletAddress)
//       .then(() => setCopySuccess('Wallet address copied!'))
//       .catch(() => setCopySuccess('Failed to copy wallet address.'));
//   };

//   return (
//     <Container className="my-5">
//       {loading ? (
//         <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : (
//         <Card className="p-4 shadow-lg">
//           <Card.Body>
//             <h3 className="text-warning mb-4 text-center">Please copy the Bitcoin wallet address below and proceed to make payment before depositing</h3>

//             <Form>
//               <Form.Group className="mb-3">
//                 <Form.Label>Cryptocurrency Wallet Address</Form.Label>
//                 <div className="d-flex flex-column flex-md-row align-items-center">
//                   <Form.Control
//                     type="text"
//                     readOnly
//                     value={walletAddress}
//                     className="me-md-2 mb-2 mb-md-0 flex-fill"
//                   />
//                   <Button variant="outline-secondary" onClick={copyToClipboard}>
//                     Copy
//                   </Button>
//                 </div>
//                 {copySuccess && <Alert variant="success" className="mt-2">{copySuccess}</Alert>}
//               </Form.Group>

//               {error && <Alert variant="danger" className="mb-3">{error}</Alert>}

//               <Form.Group className="mb-4">
//                 <Form.Label>Amount</Form.Label>
//                 <Form.Control
//                   type="number"
//                   placeholder="Enter deposit amount"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                 />
//               </Form.Group>

//               <Button variant="primary" onClick={handleDeposit} disabled={!canDeposit} className="w-100">
//                 Submit
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       )}
//     </Container>
//   );
// };

// export default Deposit;



import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Card, Spinner, Container } from 'react-bootstrap';
import { depositFunds } from '../services/api';

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [bitcoinAddress] = useState('bc1q86ft8jetypld2upxzlx9x9rv3deun83xgtm3xn'); // Bitcoin address
  const [usdtAddress] = useState('0x59163F71fdFDD128F1F3CB3eD6Ed1c6626612Cdc'); // USDT ERC-20 address
  const [copySuccess, setCopySuccess] = useState('');
  const [error, setError] = useState('');
  const [canDeposit, setCanDeposit] = useState(true);
  const [loading, setLoading] = useState(true); // Initialize loading as true

  useEffect(() => {
    const checkDepositAvailability = () => {
      const lastDepositDate = localStorage.getItem('lastDepositDate');
      if (lastDepositDate) {
        const lastDeposit = new Date(lastDepositDate);
        const now = new Date();
        const oneWeek = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
        if (now - lastDeposit < oneWeek) {
          setCanDeposit(false);
          setError('You can only make a deposit once per week.');
        }
      }
      setLoading(false); // Set loading to false after the check
    };

    checkDepositAvailability();
  }, []);

  const handleDeposit = async () => {
    if (!canDeposit) {
      setError('You can only make a deposit once per week.');
      return;
    }
    try {
      setLoading(true); // Show spinner while the deposit request is being processed
      await depositFunds({ amount });
      alert('Deposit successful!');
      setAmount(''); // Clear the amount field
      localStorage.setItem('lastDepositDate', new Date().toISOString()); // Update last deposit date
      setCanDeposit(false);
      setError('');
    } catch (error) {
      console.error('Error making deposit:', error);
      setError('Error making deposit. Please try again.');
    } finally {
      setLoading(false); // Hide spinner once the request is complete
    }
  };

  const copyToClipboard = (address) => {
    navigator.clipboard.writeText(address)
      .then(() => setCopySuccess('Wallet address copied!'))
      .catch(() => setCopySuccess('Failed to copy wallet address.'));
  };

  return (
    <Container className="my-5">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Card className="p-4 shadow-lg">
          <Card.Body>
            <h3 className="text-warning mb-4 text-center">Please copy the wallet address below and proceed to make payment before depositing</h3>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Bitcoin Wallet Address</Form.Label>
                <div className="d-flex flex-column flex-md-row align-items-center">
                  <Form.Control
                    type="text"
                    readOnly
                    value={bitcoinAddress}
                    className="me-md-2 mb-2 mb-md-0 flex-fill"
                  />
                  <Button variant="outline-secondary" onClick={() => copyToClipboard(bitcoinAddress)}>
                    Copy
                  </Button>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>USDT ERC-20 Wallet Address</Form.Label>
                <div className="d-flex flex-column flex-md-row align-items-center">
                  <Form.Control
                    type="text"
                    readOnly
                    value={usdtAddress}
                    className="me-md-2 mb-2 mb-md-0 flex-fill"
                  />
                  <Button variant="outline-secondary" onClick={() => copyToClipboard(usdtAddress)}>
                    Copy
                  </Button>
                </div>
                {copySuccess && <Alert variant="success" className="mt-2">{copySuccess}</Alert>}
              </Form.Group>

              {error && <Alert variant="danger" className="mb-3">{error}</Alert>}

              <Form.Group className="mb-4">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter deposit amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={handleDeposit} disabled={!canDeposit} className="w-100">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Deposit;
