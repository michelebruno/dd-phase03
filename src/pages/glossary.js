import React, {useState} from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import classNames from "classnames";
import WordsIndex from "../components/WordsIndex";
import Accordion from "../components/Accordion";
import {MaskometerGrid} from "../components/maskometerGrid";
import Comments from "../components/Comments";


export default function Glossary({data: {words, allComments, ...data}}) {
    const [chosen, setChosen] = useState({})
    const [secondWord, setSecondWord] = useState()
    const [showComments, setShowComments] = useState(false)

    const listOfChosenWords = words.nodes.map(x => x.name)

    const distribution = data
        .distribution
        .nodes
        .filter(i => {
            return listOfChosenWords.findIndex(x => x === i.secondWord) !== -1
        })


    return <Layout wrapperClassName={"max-h-screen h-screen flex flex-col"}
                   className={"flex-1 min-h-0 "}>
        <div className="w-full h-full overflow-hidden flex flex-nowrap">
            <WordsIndex words={words.nodes} chosen={chosen} setChosen={setChosen}/>
            <div className={classNames(
                'transition-[width] duration-1000 overflow-hidden flex flex-col ',
                chosen.current ? 'w-10/12' : 'w-0'
            )}>
                <Accordion title={"Maskometer"} isOpen={!showComments} onClick={() => setShowComments(!showComments)}>
                    <MaskometerGrid chosen={chosen} words={words} distribution={distribution}/>
                </Accordion>
                <Accordion title={"Comments"} isOpen={showComments} onClick={() => setShowComments(!showComments)}>
                    <Comments
                        comments={allComments.nodes
                            .filter(({word}) => {
                                return word === chosen.current
                            })
                        }
                        distribution={distribution.filter(({word}) => word === chosen.current)}
                        chosen={chosen.current}
                        secondWord={secondWord}
                        onChangeSecondWord={setSecondWord}
                    />
                </Accordion>
            </div>
        </div>
    </Layout>
}

export const query = graphql`query Glossary {
    words: allSheetsScatter(filter: {scelta: {eq: "X"}}, sort: {order: ASC, fields: [name]}){
        nodes{
            name
            deltaPromask
            finding
        }
    }
    distribution: allSheetsDistribuzioneV2(sort: {order: ASC, fields: [secondWord]}) {
        nodes {
            word
            secondWord
            nomaskDelta
            promaskDelta
        }
    }
    allComments: allSheetsEstratti(filter: {scelto: {eq: "x"}}) {
        nodes {
            ...CommentFragment
        }
    }
}`
