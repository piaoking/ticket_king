package com.ticket.demo_ticketking;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
@MapperScan("com.ticket.demo_ticketking.mapper")
public class DemoTicketKingApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoTicketKingApplication.class, args);
    }

}
