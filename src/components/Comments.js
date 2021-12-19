import React, {useEffect, useMemo, useRef} from "react";
import classNames from "classnames";
import Comment from "./Comment";
import {ArchiveButton} from "./Button";
import {mix} from "../utils/mix";
import {matches, sentencesHaveWord} from "../utils/sentences";


function GroupCommentList({comments, chosen, secondWord, origin}) {

    const {filteredComments, totalComments, totalFiltered} = useMemo(() => {
        let thisOriginComments = comments
            .filter(({origin: o}) => origin === o)

        const filteredComments = thisOriginComments
            .filter(({sentences}) => {
                return !secondWord || sentencesHaveWord(sentences, secondWord)
            })

        return {
            totalComments: thisOriginComments.length,
            filteredComments: thisOriginComments
                .filter(({sentences}) => {
                    return !secondWord || sentencesHaveWord(sentences, secondWord)
                })
        }
    }, [secondWord, origin, chosen])

    let perc = (100 * filteredComments.length / totalComments)

    let round = perc > 1 ? 0 : 1

    return <div>
        <p className="sticky top-0 bg-black z-30 text-center text-lg pt-3 pb-4">
            {
                secondWord ?
                    `${perc.toFixed(round)}% of ${origin} opinions (${filteredComments.length} of ${totalComments})` :
                    `Showing all ${origin} opinions`
            }
        </p>

        <div key={origin} className={"grid gap-4 pb-64 "}> {filteredComments
            .map(
                (c) => <Comment key={c.id}
                                highlightWords={true}
                                word={chosen}
                                secondWord={secondWord} {...c} />
            )}

        </div>
    </div>
}

export default function Comments({comments, chosen, secondWord, onChangeSecondWord, distribution}) {

    const scroller = useRef()

    useEffect(() => {
        scroller.current?.scrollTo(0, 0)
    }, [chosen, secondWord])


    return <div className={"flex h-full px-8 flex-wrap "}>
        <p className="mb-4 w-full text-lg">Here you can read the reasons to sign the 100 most popular promask and nomask
            petition</p>
        <div className="flex flex-col h-full w-full" >

            <div className={"w-full sticky top-0 bg-black z-20"}>
                <h2 className={"text-lg text-light my-4"}>Filter opinions by:</h2>
                <div className="flex flex-wrap">
                    {distribution.map(({secondWord: word, nomaskDelta}) => {
                        const isSelected = secondWord === word
                        const isCurrent = chosen === word

                        return <ArchiveButton
                            key={word}
                            checkbox
                            isCurrent={isCurrent}
                            className={"mb-2 mr-2"}
                            isSelected={isSelected}
                            onClick={() => onChangeSecondWord(isSelected ? undefined : word)}
                            style={{
                                '--gradient-mix': mix('EA3C9A', '3514FF', nomaskDelta * 100)
                            }}
                        >
                            {word}
                        </ArchiveButton>
                    })}
                </div>
            </div>
            <div
                className={classNames("transition-transform w-full h-full md:w-11/12 3xl:w-10/12 mx-auto overflow-y-scroll")}
                id={"comments-container"} ref={scroller}>
                <div className="grid grid-cols-2 gap-8 justify-around ">
                    {['promask', 'nomask'].map(origin => <GroupCommentList key={origin} origin={origin}
                                                                           comments={comments}
                                                                           chosen={chosen} secondWord={secondWord}/>)}
                </div>
            </div>
        </div>
    </div>
}