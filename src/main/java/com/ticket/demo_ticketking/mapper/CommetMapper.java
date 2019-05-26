package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.vo.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CommetMapper {

    List<Comment> queryComment();
}
