<?php

namespace App\Http\Controllers;

use App\Mail\MailClass;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Mail;
use Mail;

class MailSetting extends Controller
{
     

     public function getContact(){

     	return view('welcome_watch');
     }





    //JBL GO 2
     public function postContact(Request $request){

      Mail::send('emails.contact',
       array(
           'name' => $request->get('name'),
           'phone' => $request->get('phone'),
//           'address' => $request->get('address'),
       ), function($message)
   {
       $message->from('aziztwelve@gmail.com');
       $message->to('sport_aziz@mail.ru', 'Азиз')->subject('elki-green.ru | Дисконт');
   });

      return redirect('/back')->with('success', 'Спасибо за Заказ! Ждите звонка!');
     }




     //JBL CHARGE 2+
     public function postCharge2(Request $request){

      Mail::send('emails.contact',
       array(
           'name' => $request->get('name'),
           'phone' => $request->get('phone'),
//           'address' => $request->get('address'),
       ), function($message)
   {
       $message->from('aziztwelve@gmail.com');
       $message->to('sport_aziz@mail.ru', 'Азиз')->subject('elki-green.ru | вопросы');
   });

      return redirect('/backcharge2')->with('success', 'Спасибо за Заказ! Ждите звонка!');
     }




     //JBL CHARGE 3
     public function postCharge3(Request $request){

      Mail::send('emails.contact',
       array(
           'name' => $request->get('name'),
           'phone' => $request->get('phone'),
//           'address' => $request->get('address'),
       ), function($message)
   {
       $message->from('aziztwelve@gmail.com');
       $message->to('sport_aziz@mail.ru', 'Азиз')->subject('elki-green.ru | Гирлянда');
   });

      return redirect('/backcharge3')->with('success', 'Спасибо за Заказ! Ждите звонка!');
     }


     //JBL PULSE 3
     public function postPulse3(Request $request){

      Mail::send('emails.contact',
       array(
           'name' => $request->get('name'),
           'phone' => $request->get('phone'),
//           'address' => $request->get('address'),
       ), function($message)
   {
       $message->from('aziztwelve@gmail.com');
       $message->to('sport_aziz@mail.ru', 'Азиз')->subject('elki-green.ru | Обратный звонок');
   });

      return redirect('/backpulse3')->with('success', 'Спасибо за Заказ! Ждите звонка!');
     }




     //JBL XTREME
     public function postXtreme(Request $request){

     	Mail::send('emails.contact',
       array(
           'name' => $request->get('name'),
           'phone' => $request->get('phone'),
//           'address' => $request->get('address'),
       ), function($message)
   {
       $message->from('aziztwelve@gmail.com');
       $message->to('sport_aziz@mail.ru', 'Азиз')->subject('elki-green.ru | Оформление заказа ');
   });

     	return redirect('/backxtreme')->with('success', 'Спасибо за Заказ! Ждите звонка!');
     }
}
