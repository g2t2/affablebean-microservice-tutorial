package tvo.tutorial.microservice.ui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
public class ApplicationBoot {

	public static void main(String[] args) {
		SpringApplication.run(ApplicationBoot.class, args);
	}

	@GetMapping("/home")
	public String viewHome() {
		return "index.html";
	}
}
