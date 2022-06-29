import React from "react";
import {View,Text} from "react-native";
import Btn from "./commons/buttons/Btn";
import color from "../globalStyles/color";
import RazorpayCheckout from 'react-native-razorpay';

const API_KEY = "rzp_test_8xviIG7UsQN799";

const Payment = ({totalPrice}) => {
return(
    <Btn title={<Text style={{color:"white", fontWeight: "bold", fontSize: 16}}>Proceed to pay</Text>} color={color.colorPrimary} style={{ width: "85%", borderRadius: 8 }}
    submitListener={() => {
        var options = {
            description: 'Buy Course',
            // image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: API_KEY, // Your api key
            amount: totalPrice,
            name: 'Hawk Academe',
            // prefill: {
            //   email: 'void@razorpay.com',
            //   contact: '7003470494',
            //   name: 'Razorpay Software'
            // },
            theme: { color: '#A11A0E' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });
    }}
/>
)
}

export default Payment;