package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbComment;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ICommentService {
    List<TbComment> queryComment();
    void saveComment(TbComment tbComment);
    TbComment queryCommntById(@Param("commentId") Integer commentId);
    void updateComment(TbComment tbComment) throws Exception;

}
