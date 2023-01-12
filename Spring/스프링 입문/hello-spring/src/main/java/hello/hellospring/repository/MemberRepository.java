package hello.hellospring.repository;

import hello.hellospring.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    Optional<Member> findById(Long id);        // 없을 경우 Null을 반환하는데 최근에는
    Optional<Member> findByName(String name);  // optional로 감싸서 반환하는 방법을 선호
    List<Member> findAll();
}
