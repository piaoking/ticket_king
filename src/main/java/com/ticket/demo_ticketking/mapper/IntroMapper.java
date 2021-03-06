package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbIntro;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface IntroMapper {
    List<TbIntro> queryIntro();
    void saveIntro(TbIntro tbIntro);
    TbIntro queryIntroById(@Param("introId") Integer introId);
    void updateIntro(TbIntro tbIntro);
}
