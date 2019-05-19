package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbStar;

import java.util.List;

public interface StarService {
    List<TbStar> selectStar(int index1, int index2) throws Exception;
}
