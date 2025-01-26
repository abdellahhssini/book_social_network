package com.alibou.book.book;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

public interface BookRepository extends JpaRepository<Book, Integer> , JpaSpecificationExecutor<Book> {

    @Query("""
            SELECT book 
            FROM Book book
            WHERE book.archived = false
            AND book.shareable = true
            AND book.owner.id != :userId
            """)
    Page<Book> findAllDisplayableBooks(Pageable pageable, Integer userId);

    @Query("""
           SELECT (COUNT(*) > 0) AS isBorrowed
           FROM BookTransactionHistory bookTransactionHistory
           WHERE bookTransactionHistory.user.id = :userId
           AND bookTransactionHistory.book.id = :bookId
           AND bookTransactionHistory.returnApproved = false
           """)
    boolean isAlreadyBorrowedByUser(Integer bookId, Integer userId);
}
