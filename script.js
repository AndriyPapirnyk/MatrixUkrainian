let diode_color = 'orange';
let clear_color = 'white';
let h_c = 'red';
add.onclick = () => {
    let str = inp.value;
    inp.value = '';
    let i = 0;
    let timerId = setInterval(function() {
        if(i<str.length) {
            switch (str[i]) {
                case 'а':
                    clear();
                diode6_2.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_4.style.backgroundColor = diode_color;
                diode6_4.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                break;

                case 'б':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;


                break;

                case 'в':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                break;

                case 'г':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                break;

                case 'д':
                    clear();
                diode2_2.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode2_4.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode5_4.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode6_4.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'е':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'є':
                    clear();
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_2.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'ж':
                    clear();
                diode1_3.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode5_4.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                break;

                case 'з':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                break;


                case 'и':
                    clear();
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                break;


                case 'і':
                    clear();
                diode1_3.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                break;

                case 'й':
                    clear();
                    diode1_2.style.backgroundColor = diode_color;
                    diode1_3.style.backgroundColor = diode_color;
                    diode1_4.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'ї':
                    clear();
                diode1_2.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                break;


                case 'к':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                break;

                case 'л':
                    clear();
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_2.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_2.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;

                break;

                case 'м':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode2_2.style.backgroundColor = diode_color;
                diode2_4.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'н':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'о':
                    clear();
                diode1_2.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                break;

                case 'п':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;



                case 'р':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                break;

            
                case 'с':
                    clear();
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_2.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'у':
                clear();
                diode2_1.style.backgroundColor = diode_color;
                diode3_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                break;


                case 'ф':
                    clear();
                diode1_2.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;

                break;



                case 'х':
                        clear();
                    diode2_1.style.backgroundColor = diode_color;
                    diode3_2.style.backgroundColor = diode_color;
                    diode4_3.style.backgroundColor = diode_color;
                    diode5_2.style.backgroundColor = diode_color;
                    diode6_1.style.backgroundColor = diode_color;
                    diode6_5.style.backgroundColor = diode_color;
                    diode5_4.style.backgroundColor = diode_color;
                    diode4_3.style.backgroundColor = diode_color;
                    diode3_4.style.backgroundColor = diode_color;
                    diode2_5.style.backgroundColor = diode_color;
                    break;


                    case 'ц':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_4.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode2_4.style.backgroundColor = diode_color;
                diode3_4.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode5_4.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode6_4.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;


                case 'ч':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_2.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_4.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'ш':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode7_1.style.backgroundColor = diode_color;
                diode7_2.style.backgroundColor = diode_color;
                diode7_3.style.backgroundColor = diode_color;
                diode7_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;

                case 'щ':
                    clear();
                diode1_1.style.backgroundColor = diode_color;
                diode1_3.style.backgroundColor = diode_color;
                diode1_5.style.backgroundColor = diode_color;
                diode2_1.style.backgroundColor = diode_color;
                diode2_3.style.backgroundColor = diode_color;
                diode2_5.style.backgroundColor = diode_color;
                diode3_1.style.backgroundColor = diode_color;
                diode3_3.style.backgroundColor = diode_color;
                diode3_5.style.backgroundColor = diode_color;
                diode4_1.style.backgroundColor = diode_color;
                diode4_3.style.backgroundColor = diode_color;
                diode4_5.style.backgroundColor = diode_color;
                diode5_1.style.backgroundColor = diode_color;
                diode5_3.style.backgroundColor = diode_color;
                diode5_5.style.backgroundColor = diode_color;
                diode6_1.style.backgroundColor = diode_color;
                diode6_3.style.backgroundColor = diode_color;
                diode6_5.style.backgroundColor = diode_color;
                diode6_2.style.backgroundColor = diode_color;
                diode6_4.style.backgroundColor = diode_color;
                diode7_5.style.backgroundColor = diode_color;
                break;



                case 'т':
                    clear();
                   diode1_1.style.backgroundColor = diode_color;
                   diode1_2.style.backgroundColor = diode_color;
                   diode1_3.style.backgroundColor = diode_color;
                   diode1_4.style.backgroundColor = diode_color;
                   diode1_5.style.backgroundColor = diode_color;
                   diode2_3.style.backgroundColor = diode_color;
                   diode3_3.style.backgroundColor = diode_color;
                   diode4_3.style.backgroundColor = diode_color;
                   diode5_3.style.backgroundColor = diode_color;
                   diode6_3.style.backgroundColor = diode_color;
                   diode7_3.style.backgroundColor = diode_color;
                   break;

                   case 'ь':
                    clear();
                   diode1_1.style.backgroundColor = diode_color;
                   diode2_1.style.backgroundColor = diode_color;
                   diode3_1.style.backgroundColor = diode_color;
                   diode4_1.style.backgroundColor = diode_color;
                   diode5_1.style.backgroundColor = diode_color;
                   diode6_1.style.backgroundColor = diode_color;
                   diode7_1.style.backgroundColor = diode_color;
                   diode5_2.style.backgroundColor = diode_color;
                   diode5_3.style.backgroundColor = diode_color;
                   diode5_4.style.backgroundColor = diode_color;
                   diode5_5.style.backgroundColor = diode_color;
                   diode6_5.style.backgroundColor = diode_color;
                   diode7_2.style.backgroundColor = diode_color;
                   diode7_3.style.backgroundColor = diode_color;
                   diode7_4.style.backgroundColor = diode_color;
                   diode7_5.style.backgroundColor = diode_color;
                   break;

                   case 'ю':
                    clear();
                   diode1_1.style.backgroundColor = diode_color;
                   diode2_1.style.backgroundColor = diode_color;
                   diode3_1.style.backgroundColor = diode_color;
                   diode4_1.style.backgroundColor = diode_color;
                   diode5_1.style.backgroundColor = diode_color;
                   diode6_1.style.backgroundColor = diode_color;
                   diode7_1.style.backgroundColor = diode_color;
                   diode4_2.style.backgroundColor = diode_color;
                   diode4_3.style.backgroundColor = diode_color;
                   diode3_3.style.backgroundColor = diode_color;
                   diode2_3.style.backgroundColor = diode_color;
                   diode1_4.style.backgroundColor = diode_color;
                   diode2_5.style.backgroundColor = diode_color;
                   diode3_5.style.backgroundColor = diode_color;
                   diode4_5.style.backgroundColor = diode_color;
                   diode6_3.style.backgroundColor = diode_color;
                   diode5_3.style.backgroundColor = diode_color;
                   diode5_5.style.backgroundColor = diode_color;
                   diode6_5.style.backgroundColor = diode_color;
                   diode7_4.style.backgroundColor = diode_color;
                   break;

                   case 'я':
                    clear();
                   diode1_3.style.backgroundColor = diode_color;
                   diode1_4.style.backgroundColor = diode_color;
                   diode1_5.style.backgroundColor = diode_color;
                   diode2_2.style.backgroundColor = diode_color;
                   diode2_5.style.backgroundColor = diode_color;
                   diode3_3.style.backgroundColor = diode_color;
                   diode3_4.style.backgroundColor = diode_color;
                   diode3_5.style.backgroundColor = diode_color;
                   diode4_4.style.backgroundColor = diode_color;
                   diode4_5.style.backgroundColor = diode_color;
                   diode5_3.style.backgroundColor = diode_color;
                   diode5_5.style.backgroundColor = diode_color;
                   diode6_2.style.backgroundColor = diode_color;
                   diode6_5.style.backgroundColor = diode_color;
                   diode7_2.style.backgroundColor = diode_color;
                   diode7_5.style.backgroundColor = diode_color;
                   break;






            }
            i++;
        } else {
            clearInterval(timerId);
            clear();
        }
    },500)
};

function clear() {
    diode1_1.style.backgroundColor = clear_color;
    diode1_2.style.backgroundColor = clear_color;
    diode1_3.style.backgroundColor = clear_color;
    diode1_4.style.backgroundColor = clear_color;
    diode1_5.style.backgroundColor = clear_color;

    diode2_1.style.backgroundColor = clear_color;
    diode2_2.style.backgroundColor = clear_color;
    diode2_3.style.backgroundColor = clear_color;
    diode2_4.style.backgroundColor = clear_color;
    diode2_5.style.backgroundColor = clear_color;

    diode3_1.style.backgroundColor = clear_color;
    diode3_2.style.backgroundColor = clear_color;
    diode3_3.style.backgroundColor = clear_color;
    diode3_4.style.backgroundColor = clear_color;
    diode3_5.style.backgroundColor = clear_color;

    diode4_1.style.backgroundColor = clear_color;
    diode4_2.style.backgroundColor = clear_color;
    diode4_3.style.backgroundColor = clear_color;
    diode4_4.style.backgroundColor = clear_color;
    diode4_5.style.backgroundColor = clear_color;

    diode5_1.style.backgroundColor = clear_color;
    diode5_2.style.backgroundColor = clear_color;
    diode5_3.style.backgroundColor = clear_color;
    diode5_4.style.backgroundColor = clear_color;
    diode5_5.style.backgroundColor = clear_color;

    diode6_1.style.backgroundColor = clear_color;
    diode6_2.style.backgroundColor = clear_color;
    diode6_3.style.backgroundColor = clear_color;
    diode6_4.style.backgroundColor = clear_color;
    diode6_5.style.backgroundColor = clear_color;

    diode7_1.style.backgroundColor = clear_color;
    diode7_2.style.backgroundColor = clear_color;
    diode7_3.style.backgroundColor = clear_color;
    diode7_4.style.backgroundColor = clear_color;
    diode7_5.style.backgroundColor = clear_color;
}