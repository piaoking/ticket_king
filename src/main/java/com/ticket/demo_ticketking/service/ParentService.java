package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbParent;

import java.util.List;

public interface ParentService {

    List<TbParent> queryParent() throws Exception;
}
