package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbComment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface CommentMapper {
    List<TbComment> queryComment();
    void saveComment(TbComment tbComment);
    TbComment queryCommntById(@Param("commentId") Integer commentId);

    void updateComment(TbComment tbComment);

}
