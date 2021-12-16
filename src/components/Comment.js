import React from "react";
import classNames from "classnames";

export function HighlightedWord({children, className, isActive, promask, nomask, secondary}) {
    return <span
        className={classNames(
            'highlighted-word',
            !promask && !nomask && 'before:bg-light',
            secondary ?
                [
                    isActive && 'before:bg-light'
                ] :
                [
                    promask && 'before:bg-promask',
                    nomask && 'before:bg-nomask',
                    isActive && (nomask || promask) && 'text-white',

                ],
            !isActive && 'before:scale-x-0',
            className
        )}
    >
        {children}
    </span>
}

export default function Comment({
                                    id,
                                    className,
                                    children,
                                    origin,
                                    petitionLink,
                                    likes,
                                    author,
                                    createdAt,
                                    dateText,
                                    word,
                                    secondWord,
                                    splitted,
                                    petitionTitle,
                                    highlightWords,
                                    large
                                }) {


    return <div
        id={id}
        className={classNames(
            className,
            "comment flex gap-4 w-full bg-white text-black boreder-2 normal-case",
            large ? 'p-8 rounded-xl' : 'p-4 rounded-xl text-base ',
            origin === 'promask' && 'border-promask',
            origin === 'nomask' && 'border-nomask'
        )}>
        <div className="w-1/12 ">
            <div className={"rounded-full bg-" + origin} style={{aspectRatio: '1'}}/>
        </div>
        <div className={"w-11/12"}>
            <div className={"text-gray select-none " + (large ? 'text-xl' : 'text-sm')}>
                <span>{author}</span>
                {' • '}
                <span>{dateText || createdAt}</span>
            </div>
            <p className={'comment-text ' + (large ? 'text-4xl leading-snug py-4' : 'py-1 text-base')}>
                {typeof splitted !== 'undefined' ? splitted.map((part, i) => {
                    const isPrimaryWord = part.toLowerCase() === word
                    const isSecondaryWord = part.toLowerCase() === secondWord

                    if (isPrimaryWord || isSecondaryWord) return <React.Fragment
                        key={i}>{" "}
                        <HighlightedWord
                            isActive={highlightWords} promask={origin === 'promask'}
                            nomask={origin === 'nomask'} secondary={!isSecondaryWord}>
                            {part}
                        </HighlightedWord>
                    </React.Fragment>

                    if (part === secondWord) return <span key={i} className={
                        'border-light border-2'
                    }>{part}</span>

                    return part
                }) : children}
            </p>
            <p className={"text-gray " + (large ? 'text-xl' : 'text-sm')}>
                <a href={petitionLink} className={"underline hover:text-light-darker"}
                   target={'_blank'}>{petitionTitle || "Petition title"}</a>
            </p>
        </div>

    </div>

}


Comment.defaultProps = {
    highlightWords: true
}