package com.ticket.demo_ticketking.vo;

public class SeatVO {
    private int row;
    private int col;
    private int style;

    @Override
    public String toString() {
        return "SeatVO{" +
                "row=" + row +
                ", col=" + col +
                ", style=" + style +
                '}';
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getCol() {
        return col;
    }

    public void setCol(int col) {
        this.col = col;
    }

    public int getStyle() {
        return style;
    }

    public void setStyle(int style) {
        this.style = style;
    }
}
