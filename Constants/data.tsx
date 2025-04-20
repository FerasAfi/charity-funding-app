import Blob1 from "@/assets/svgs/Onboarding/Blob1";
import { COLORS } from "./constants";
import Blob2 from "@/assets/svgs/Onboarding/Blob2";
import Blob3 from "@/assets/svgs/Onboarding/Blob3";




export type Slidesdata ={
    id: number;
    title: string;
    subtitle: string;
    illustration: any;
    blob: JSX.Element;
}

export const slidesdata: Slidesdata[]=[
    {
        id: 1,
        title: 'اصنع الفرق بنقرة واحدة فقط',
        subtitle: 'انضم إلى مجتمع من العطاء الذي يُحسن الحياة من خلال تبرعات بسيطة وآمنة وذات تأثير كبير',
        illustration: require('../assets/images/illustration1.png'),
        blob: <Blob1 color={COLORS.GreenStrong} width={500} height={500}></Blob1>
    },
    {
        id: 2,
        title: 'التبرع أصبح سهلاً وآمناً وشفافاً',
        subtitle: 'تبرع للأسباب المعتمدة، تتبع تأثيرك، وانشر اللطف بكل سهولة وشفافية. كل مساهمة تحدث فرقًا!',
        illustration: require('../assets/images/illustration2.png'),
        blob: <Blob2 color={COLORS.GreenStrong} width={500} height={500}></Blob2>
    },
    {
        id: 3,
        title: 'ابدأ في تغيير حياة الآخرين نحو الأفضل!',
        subtitle: 'كن سببًا في إحداث تغيير، قدّم تبرعًا اليوم، وشاهد أثر سخائك في حياة الآخرين. معًا نصنع الفرق!',
        illustration: require('../assets/images/illustration3.png'),
        blob: <Blob3 color={COLORS.GreenStrong} width={500} height={500}></Blob3>
    },
];


