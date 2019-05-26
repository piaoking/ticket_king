package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.vo.Comment;

import java.util.List;

public interface CommentService {

    List<Comment> queryComment() throws Exception ;
}
