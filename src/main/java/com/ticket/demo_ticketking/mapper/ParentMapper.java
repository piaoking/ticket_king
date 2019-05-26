package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbParent;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ParentMapper {
    List<TbParent> queryParent();
    void savaParent(TbParent tbParent);
    TbParent queryParentById(@Param("parentId") Integer parentId);
    void  updateParent(TbParent tbParent);
}
