package com.ticket.demo_ticketking.utils;

import com.ticket.demo_ticketking.po.*;

import java.util.List;

public class PageInfoUtils {
    private List<TbStar> tbStars;
    private List<TbUser> tbUsers;
    private List<TbLv> lvs;
    private  List<TbFocus> focusList;
    private  List<TbSon> lists;
    private List<TbTicket> list;
    private Integer pageNum;
    private Integer pageSize;
    private Integer pages;
    private Integer total;
    private Integer prePage;
    private Integer nextPage;
    private Boolean isFirstPage;
    private Boolean isLastPage;
    private Boolean hasPreviousPage;
    private Boolean hasNextPage;

    public List<TbStar> getTbStars() {
        return tbStars;
    }

    public void setTbStars(List<TbStar> tbStars) {
        this.tbStars = tbStars;
    }

    public List<TbUser> getTbUsers() {
        return tbUsers;
    }

    public void setTbUsers(List<TbUser> tbUsers) {
        this.tbUsers = tbUsers;
    }

    public List<TbLv> getLvs() {
        return lvs;
    }

    public void setLvs(List<TbLv> lvs) {
        this.lvs = lvs;
    }

    public List<TbTicket> getList() {
        return list;
    }

    public void setList(List<TbTicket> list) {
        this.list = list;
    }

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getPages() {
        return pages;
    }

    public void setPages(Integer pages) {
        this.pages = pages;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Integer getPrePage() {
        return prePage;
    }

    public void setPrePage(Integer prePage) {
        this.prePage = prePage;
    }

    public Integer getNextPage() {
        return nextPage;
    }

    public void setNextPage(Integer nextPage) {
        this.nextPage = nextPage;
    }

    public Boolean getFirstPage() {
        return isFirstPage;
    }

    public void setFirstPage(Boolean firstPage) {
        isFirstPage = firstPage;
    }

    public Boolean getLastPage() {
        return isLastPage;
    }

    public void setLastPage(Boolean lastPage) {
        isLastPage = lastPage;
    }

    public Boolean getHasPreviousPage() {
        return hasPreviousPage;
    }

    public void setHasPreviousPage(Boolean hasPreviousPage) {
        this.hasPreviousPage = hasPreviousPage;
    }

    public Boolean getHasNextPage() {
        return hasNextPage;
    }

    public void setHasNextPage(Boolean hasNextPage) {
        this.hasNextPage = hasNextPage;
    }

    public List<TbSon> getLists() {
        return lists;
    }

    public void setLists(List<TbSon> lists) {
        this.lists = lists;
    }

    public List<TbFocus> getFocusList() {
        return focusList;
    }

    public void setFocusList(List<TbFocus> focusList) {
        this.focusList = focusList;
    }
}
