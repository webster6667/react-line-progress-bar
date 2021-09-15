declare let durationTypes: 'ltr' | 'rtl';
export declare type ProgressBarComponent = (props: {
    progress?: number;
    duration?: typeof durationTypes;
    className?: string;
    lineContent?: any;
    parallelLineContent?: any;
    progressLineWrapperContent?: any;
    id?: any;
}) => any;
export {};
