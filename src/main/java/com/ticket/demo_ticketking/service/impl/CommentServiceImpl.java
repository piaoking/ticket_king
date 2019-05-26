package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.vo.Comment;
import com.ticket.demo_ticketking.mapper.CommetMapper;
import com.ticket.demo_ticketking.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommetMapper commetMapper;

    @Override
    public List<Comment> queryComment() throws Exception {
        List<Comment> comments = commetMapper.queryComment();
        return comments;
    }
}
