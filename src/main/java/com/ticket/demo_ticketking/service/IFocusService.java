package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbFocus;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IFocusService {
    List<TbFocus> queryFocus();
    void savaFocus(TbFocus tbFocus);
    TbFocus queryFocusById(@Param("focusId") Integer focusId);
    void upateFocus(TbFocus tbFocus) throws Exception;
}
