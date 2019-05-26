package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbFocus;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface FocusMapper {
    List<TbFocus> queryFocus();
    void savaFocus(TbFocus tbFocus);
    TbFocus queryFocusById(@Param("focusId") Integer focusId);
    void upateFocus(TbFocus tbFocus);
}
