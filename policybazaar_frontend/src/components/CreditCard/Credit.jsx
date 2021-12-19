import { PayHeader } from "../Paymentheader/PayHeader";
import "./credit.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useHistory } from "react-router-dom";

export const Credit = () => {
  const history = useHistory();

  const handleButton = () => {
    history.push("/payment");
  };
  return (
    <div>
      <PayHeader />
      <div className="paymode-md">
        <p>Choose Payment Mode</p>
      </div>
      <div className="paymd-md">
        <div className="all-paymethod">
          <div className="side-md-btn">
            <button>Debit</button>
            <button>Credit</button>
            <button>Netbanking</button>
            <button>UPI</button>
            <button>Wallet</button>
          </div>
          <div className="rights-md-de">
            <div>
              <p>Debit Card Details</p>
            </div>
            <div className="mmk"></div>
            <div className="card-md-no">Card Number</div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-password-input"
                label="XXXX-XXXX-XXXX-XXXX"
                type="string"
                autoComplete="current-password"
              />
            </Box>
            <div className="card-md-no">Name of card</div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-password-input"
                label="Enter the Name of card"
                type="password"
                autoComplete="current-password"
              />
            </Box>
            <div className="card-md-no">Expiry date</div>
            <div className="month-md-box">
              <FormControl sx={{ m: 1, width: "10ch" }}>
                <InputLabel id="demo-simple-select-helper-label">MM</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="MM"
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: "20ch" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  YYYY
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="MM"
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                  <MenuItem value={2024}>2024</MenuItem>
                  <MenuItem value={2025}>2025</MenuItem>
                  <MenuItem value={2026}>2026</MenuItem>
                  <MenuItem value={2027}>2027</MenuItem>
                  <MenuItem value={2028}>2028</MenuItem>
                  <MenuItem value={2029}>2029</MenuItem>
                  <MenuItem value={2030}>2030</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="pay-button-md">
              <button onClick={handleButton}>Pay Rs. 1,408.00</button>
            </div>
          </div>
        </div>
        <div>
          <div className="right-md-more">
            <div>Proposer's Detail</div>
            <div className="right-md-wing">
              <div>
                <img src="./images/msg.png" alt="msg" />
              </div>
              <div>si***********98@gmail.com</div>
            </div>
            <div className="right-md-wing1">
              <div>
                <img src="./images/phonn.png" alt="phone" />
              </div>
              <div>9******897</div>
            </div>
          </div>
          <div className="right-md-more1">
            <div className="rg-md1">
              <p>Your Cart</p>
              <p>Order No. PG427782305</p>
            </div>
            <div className="rg-b1"></div>
            <div className="bg-ld-md">
              <div>
                <img src="./images/companyName.png" alt="cm" />
              </div>
              <div>
                <p>SBI GENERAL INSURANCE </p>
                <p>SBI TP ONLY</p>
              </div>
            </div>
            <div className="bhut-md">
              <div className="mknjbh">
                <p>Policy Type</p>
                <p>Two Wheeler</p>
              </div>
              <div className="KIKIK">
                <p>Policy No.</p>
                <p>PB27442600194285454</p>
              </div>
              <div className="koko">
                <p>Amount</p>
                <p>Rs. 1,408</p>
              </div>
            </div>
            <div className="rg-b1" style={{ marginTop: "70px" }}></div>
            <div className="last-md">
              <div className="ls-md1">
                <p>Total Amount</p>
                <p>(Inclusive GST)</p>
              </div>
              <div>Rs. 1,408.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-ln-md">
        <div className="last-ln-mk">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p>FAQ</p>
        </div>
        <div>
          <img src="./images/visa.png" alt="none" />
        </div>
      </div>
    </div>
  );
};
