package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.CommentMapper;
import com.ticket.demo_ticketking.po.TbComment;
import com.ticket.demo_ticketking.service.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements ICommentService {
    @Autowired
    private CommentMapper commentMapper;
    @Override
    public List<TbComment> queryComment() {
        List<TbComment> tbComments = commentMapper.queryComment();
        return tbComments;
    }

    @Override
    public void saveComment(TbComment tbComment) {
        commentMapper.saveComment(tbComment);
    }

    @Override
    public TbComment queryCommntById(Integer commentId) {
        TbComment tbComment = commentMapper.queryCommntById(commentId);
        return tbComment;
    }

    @Override
    public void updateComment(TbComment tbComment)throws Exception  {
        if(null!=tbComment){
            commentMapper.updateComment(tbComment);
        }else{
            throw new UserIdNotFoundException();
        }


    }
}
