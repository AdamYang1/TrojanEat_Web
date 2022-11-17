package com.example.trojaneat.registration.token;

import com.example.trojaneat.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
@Service
@AllArgsConstructor
public class ConfirmationTokenService {
    private final ConfirmationTokenRepository confirmationTokenRepository;
    public void saveConfirmationToken(ConfirmationToken token){
        confirmationTokenRepository.save(token);

    }
    public Optional<ConfirmationToken> getToken(String token) {
        return confirmationTokenRepository.findByToken(token);
    }
    public int setConfirmedAt(String token) {
        return confirmationTokenRepository.updateConfirmedAt(
                token, LocalDateTime.now());
    }

}

//
//@Service
//@AllArgsConstructor
//public class ConfirmationTokenService {
//    private final ConfirmationTokenRepository confirmationTokenRepository;
//
////    @Autowired
////    public ConfirmationTokenService(ConfirmationTokenRepository confirmationTokenRepository){
////
////
////        this.confirmationTokenRepository = confirmationTokenRepository;
////    }
//    public void saveConfirmationToken(ConfirmationToken token){
//        confirmationTokenRepository.save(token);
//
//    }
//    public Optional<ConfirmationToken> getToken(String token) {
//        return confirmationTokenRepository.findByToken(token);
//    }
//    public int setConfirmedAt(String token) {
//        return confirmationTokenRepository.updateConfirmedAt(
//                token, LocalDateTime.now());
//    }
//
//}
