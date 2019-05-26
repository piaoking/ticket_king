package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbParent;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface ParentMapper {
    List<TbParent> queryParent();
    void savaParent(TbParent tbParent);
    TbParent queryParentById(@Param("parentId") Integer parentId);
    void  updateParent(TbParent tbParent);
}
