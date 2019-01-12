package tvo.tutorial.microservice.ws.payment;

import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    public String process(PaymentReqBody reqBody) {
        return String.format("Order Email: %s - Amount: %s", reqBody.getEmail(), reqBody.getAmount());
    }
}
