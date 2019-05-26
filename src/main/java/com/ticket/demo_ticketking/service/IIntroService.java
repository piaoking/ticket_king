package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbIntro;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IIntroService {
    List<TbIntro> queryIntro();
    void saveIntro(TbIntro tbIntro);
    TbIntro queryIntroById(@Param("introId") Integer introId);
    void updateIntro(TbIntro tbIntro) throws Exception;

}
