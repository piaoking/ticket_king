package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbParent;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IParentService {
    List<TbParent> queryParent();
    void savaParent(TbParent tbParent);
    TbParent queryParentById(@Param("parentId") Integer parentId);
    void  updateParent(TbParent tbParent) throws Exception;
}
