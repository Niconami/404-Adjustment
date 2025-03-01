import { Fragment } from 'preact';
import style from './style';

const Poem = (props) => {
    const {title, poem} = props;
    return (
        <span class={style.poemcontainer}>
            <br />
            <fieldset>
                <legend>{title}</legend>
                <span>{poem}</span>
            </fieldset>
            <br />
        </span>
    )
}

const poems = [
    {
        id: 0,
        title: "Ignorance",
        desc: [
            "I laid still, in a field of grass,",
            "The curve of a lifetime forgotten,",
            "Traceable,",
            "",
            "The grass of a thousand lives before me,",
            "Each identical under the gaze of the masses,",
            "Each with such story,",
            "Such individuality,",
            "",
            "A tree stands, squats: the horizon calls,",
            "You ignore it,",
            "",
            "As you distance, trees disappear,",
            "Forests give way to cities;",
            "Give way to the trap,",
            "",
            "Hundreds of trees stand, still,",
            "Surrounded by smoke and steel,",
            "A breath of fresh air no more than a myth,",
            "",
            "I lay once again in this former field,",
            "",
            "You see me, silently approach;",
            "I think: I know your words;",
            "But you just walk away,",
            "Once more."
        ]
    },
    {
        id: 1,
        title: "Someone Else's Panopticon",
        desc: [
            "I look outside, after silence,",
            "I look inside, I see flashes,",
            "Flashes of light reflected in me,",
            "",
            "Flashes in the past tense,",
            "Thoughts from sounds ago,",
            "",
            "Can't hold a conversation,",
            "Too caught up in my own",
            "Head, turning to look at another screen,",
            "",
            "Spot another camera,",
            "Regulate my behaviour,",
            "",
            "What concrete madness we live in,",
            "Block it all out; next time it shows,",
            "I'm different, it's all alien. "
        ]
    },
    {
        id: 2,
        title: "You are Nothing without me",
        desc: [
            "A ray of hope, caught in a razor,",
            "what's next is anyone's guess,",
            "",
            "A sharp line of skin,",
            "A slicing, stinging, burning pain,",
            "and the past comes rushing back.",
            "",
            "Rushing, like the veins,",
            "like the arteries,",
            " which don't suffer thought:",
            "saying, \"You are Nothing without me\"",
            "",
            "They are not alone in their message,",
            "Echoed by scars,",
            "Repeated by the scales,",
            "A prisoner turned against its sole possesor."
        ]
    },
    {
        id: 3,
        title: "Moonlit Overpass",
        desc: [
            "The beauty of the moon,",
            "seen from a million miles away,",
            "stunning still from a pillow,",
            "A view rivalled only by:",
            "",
            "That of a rural bridge,",
            "over the tracks, chasing,",
            "A rolling landscape,",
            "Ended by a tree.",
            "",
            "Soaring.",
            "",
            "A bridge chased away,",
            "Supports a body not,",
            "So it soars and falls,",
            "Towards the tracks below.",
            "",
            "Onwards and downwards,",
            "As gravity runs course,",
            "A body finds the ground,",
            "Passing underneath.",
            "",
            "Searing."
        ]
    },
    {
        id: 4,
        title: "Heartbroken",
        desc: [
            "an embrace... a kiss... a date...",
            "all of a past life... none familiar...",
            "What is it for?",
            "Am I broken? Am I?",
            "",
            "A hole in my heart,",
            "told I should hope,",
            "get a filling, or two,",
            "Am I broken?",
            "",
            "Deemed a worthless piece,",
            "reduced to a problem,",
            "emotion as an extra,",
            "Am I broken?",
            "",
            "Tell me I'm loveable",
            "and I am deserving,",
            "I'm still broken, discarded.",
            "You can't ever fill an empty heart,", 
            "",
            "except with more holes.",
            "",
        ]
    },
    {
        id: 5,
        title: "Regulation",
        desc: [
            "Grant that: a word is just that.",
            "No more. No less.",
            "Can it be they have meaning?",
            "As mathematics once was",
            "separated. Symbols.",
            "",
            "Reality.",
            "Detached from origins,",
            "Can it be they still have meaning?",
            "A schism, a rift",
            "between word and form.",
            "",
            "By word, only another may be referred.",
            "An object of reality,",
            "cannot interact with a fake:",
            "Construction of the mind.",
            "",
            "What use was connection?",
            "Coordinated society?",
            "A society split as easily as words?",
            "My vision may be your smell,",
            "my green:",
            "",
            "your blue; your blood,",
            "What use are words to describe fleeting vision?",
            "Extremes elude words,",
            "as do emotions,",
            "as do words themselves."

        ]
    },
    {
        id: 6,
        title: "My Own Terms",
        desc: [
            "I dreamt.",
            "",
            "Of freedom:",
            "  to walk.",
            "  to walk alone at night.",
            "  to walk alone in June",
            "  with a wife.",
            "",
            "I once dreamt that one day,",
            "perhaps a June night,",
            "I could one day walk a beach",
            "among a sea breeze",
            "- one that did not smell of sewage.",
            "",
            "Beyond my furthest hopes:",
            "  I walk there, over hellish tarmac",
            "  past tortured homes,",
            "  under tremendous trees",
            "- and I cannot see the stars",
            "",
            "yet I never once dreamt:",
            "  that walk could contain",
            "  noise so loud; pop no doubt,",
            "  blasted over hills",
            "  to the beach",
            "- and I cannot hear the waves.",
            "",
            "But upon this beach,",
            "one I never dreamed about:",
            "I see stars, I hear waves, I smell only air.",
            "I am here:",
            "  in June...",
            "  At night...",
            "  With a wife:",
            "    but no life, in death."
        ]
    },
    {
        id: 7,
        title: "Spite",
        desc: [
            "Because I would stay up",
            "all night, if it would make you any better,",
            "perhaps no rhyme, no reason, no rhythm, ",
            "but what is love if it rhymes?",
            "",
            "Because I would write you a poem",
            "and if I had to hide my love,",
            "address it to a tree, a tower, a beach",
            "or dedicate it to an anthology,",
            "if I could not dedicate myself to you.",
            "",
            "Passion, irrelevant.",
            "Hypotheticals unnecessary, for what can be ",
            "done in a moment.",
            "Why bother, with metaphors, comparisons, delusions?",
            "You could be here, now",
            "with me and my mind, to share.",
            "",
            "The freedom to love;",
            "a right within Europe, France.",
            "The city of love, Paris,",
            "I left a lock on that bridge",
            "to symbolise our love like so many others.",
            "",
            "And that is where it ends, isn't it?",
            "Why bother, in the face of rhyme, repetition and refrain?"
        ]
    },
    {
        id: 8,
        title: "Babylon",
        desc: [
            "am I losing it? or is",
            "this simply the result of",
            "the accumulation of knowledge?",
            "",
            "activities of the day,",
            "seeping, bleeding into the night.",
            "does reality become weaker,",
            "as we force ourselves around it?",
            "",
            "a field of noise, persistent in vision,",
            "never to end, but ever endured.",
            "can the visual voice be silenced,",
            "or is it destined to outlive me?",
            "",
            "thousands of years, ",
            "education only develops.",
            "as more is known, can it's",
            "impartation be safe? the constant. the increase, it overloads a simple mind."
        ]
    },
    {
        id: 9,
        title: "Replicate",
        desc: [
            "It's selfish, yet hellish.",
            "Why must I feel pain?",
            "Only to access ability,",
            "to relate?",
            "",
            "Pain felt so strongly,",
            "yet unplaceable, barely real.",
            "",
            "Pain that rips, unfeeling.",
            "Unfelt, it may just be mimed,",
            "as a line across my chest,",
            "through the heart,",
            "carving a new neck.",
            "Perhaps as one models a doll.",
            "Clay.",
            "",
            "Is this, this pained face,",
            "Is this the sane face I show all else?",
            "The trees and grass must not see this,",
            "Yet it is a part of me, and nature,",
            "just the same.",
            "",
            "When it's over:",
            "The phantom has passed,",
            "the face remodelled:",
            "With an ever-changing face",
            "How could I hope to recognise myself?",
            "How can I distinguish humanity,",
            "if it cannot treat me better than myself?",
            "",
            "Nothing can bear the weight imposed,",
            "by the sin of individualism."
        ]
    },
    {
        id: 10,
        title: "Endless Waiting",
        desc: [
            "The mirror:",
            "A harsh reminder.",
            "Of both what once was,",
            "and seemingly will forever be.",
            "",
            "Hair grows, a blessing,",
            "and a curse.",
            "A treatment, a cure,",
            "Life-saving care:",
            "",
            "One hundred and two,",
            "then three and four.",
            "How many weeks more?",
            "How many must I wait?",
            "",
            "May I stare into a mirror?",
            "Or will I reject myself,",
            "my stomach growing uneasy,",
            "as I open the letter.",
            "",
            "Will it end the wait,",
            "or be an excuse to",
            "suspend a dead weight?",
            "",
            "Is it to be said I died before treatment,",
            "or without it?"
        ]
    },
    {
        id: 11,
        title: "Positive Disposition",
        desc: [
            "I can say 'I love you',",
            "who couldn't? The difference,",
            "is that I cannot say it truthfully.",
            "I could say it so many times,",
            "yet it would still be a lie,",
            "for I cannot feel love.",
            "",
            "A positive disposition,",
            "that would be truthful,",
            "yet I doubt it would be accepted.",
            "To many, its objectivity,",
            "could not replace love.",
            "",
            "Despite this, I feel,",
            "A positive disposition toward you.",
            "Your face,",
            "always brightens my day.",
            "",
            "I say: your smile,",
            "brings out my own.",
            "Should I see it again, I imagine",
            "it is correct that",
            "I will smile once more.",
            "",
            "You claim I am ever so pretty:",
            "How can I ever live up to that?"
        ]
    },
    {
        id: 12,
        title: "Connection",
        desc: [
            "Something inside is broken.",
            "Fundamentally shattered, perhaps.",
            "Or severed, it's link to the-",
            "whole, cut, ripped, torn.",
            "",
            "\"You'll be fine without it\"",
            "",
            "Perhaps it was fourteen years-",
            "ago, it gets ever harder to tell.",
            "It makes no difference, the now-",
            "is damaged, never to reflect the-",
            "internal outward, a wall of sorts.",
            "",
            "Despite the missing piece, It-",
            "is physically intact. Inspection,",
            "fooled by the simplest of paint.",
            "",
            "Which part is the whole? Which-",
            "side of the wall is true?",
            "The paint only seems more real.",
            "Which side of the mask is me?",
            "",
            "The wall of paint is observed-",
            "once more. It's beauty shifts once more-",
            "No two observers of such an object,",
            "ever hold the same subjective view",
            "",
            "But it's all a front. That's all-",
            "it can ever be, the wall,",
            "the mask that hides me.",
            "",
            "A front for what was lost all those years ago."
        ]
    },
    {
        id: 13,
        title: "Energy",
        desc: [
            "How can one convey,",
            "intensity of emotion:",
            "metaphors, art, whatever.",
            "",
            "The topic is a deep one,",
            "as deep as it is pointless,",
            "futile, irrelevant to material",
            "world, gains.",
            "",
            "Pointless is not zero-point;",
            "zero is not the smallest.",
            "Though that is obvious, materially:",
            "losses, deficits, whatever.",
            "",
            "How can art reconcile with,",
            "such material beings,",
            "who exploit it, take it,",
            "turn it for profit,",
            "with mass-production?",
            "There is no art. Art",
            "requires emotion, a spiritual element.",
            "",
            "There is no spirit in the machine,",
            "no ghost. Is there spirit in",
            "an atheist? Or do they, too,",
            "fail to create art, instead producing:",
            "waste, scribbles, whatever.",
            "",
            "What does it mean to lose all meaning?",
            "Anything at all? How can one convey",
            "the intensity of nothing? Is it art?",
            "Or is it words, ideas, whatever?",
            "Has it lost its meaning?"
        ]
    },
    {
        id: 14,
        title: "Pointless",
        desc: [
            "Can a poem,",
            "any poem, any at all.",
            "Can a poem ever hope to convey,",
            "a message, point, anything,",
            "with complete certainty?",
            "A poem can make you think,",
            "a question, though rhetorical,",
            "will never go unanswered.",
            "But can a poem force,",
            "one answer, one meaning,",
            "from any number of brains?",
            "",
            "Can it make a point,",
            "without a literary device?",
            "",
            "This tool, language, used daily,",
            "used to share ideas,",
            "depends so heavily,",
            "on other constructs; can they be separated?",
            "",
            "No, these structures are.",
            "Because the language is.",
            "",
            "The omission of language,",
            "of structure, is what causes,",
            "such ambiguity, and so I",
            "must be clear; this means much,",
            "as it says little.",
            "",
            "\"Little\", says this,",
            "and so of course, means much.",
            "Making it all so trivial,",
            "it means next to nothing at all.",
            "",
            "Do you understand,",
            "exactly what I must mean?",
            "A point, one that can be made",
            "through language: a point",
            "hardly worth making:",
            "no point at all.",
            "",
            "If, despite a layering of elements,",
            "designed to confuse and mislead,",
            "a point is found,",
            "you shall find that the point found,",
            "is of no relation at all to the,",
            "point of the piece.",
            "",
            "The point of this was to mislead,",
            "in a sense, pointless by principle,",
            "yet has conveyed a point,",
            "as certain as life, that the point",
            "of a point is to be no point at all.",
            "",
            "And so, the point of this is missed,",
            "but by none less than the author,",
            "so how could anyone ever hope to understand,",
            "the point of the poem?",
            "",
            "Maybe the following word will clarify,",
            "the meaning of the message, the idea,",
            "that one such poem could try so hard to convey:",
            "",
            "Little."
        ]
    },
    {
        id: 15,
        title: "Bubbles",
        desc: [
            "A tool to free us,",
            "suddenly a toll, tax, becomes surplus.",
            "All to a corporation with soul,",
            "values? Murder. Goal?",
            "Growth. Exponetial, in a finite world.",
            "Yet to still fail against gold,",
            "crash into the ground, bailed out,",
            "by a government, silencing shouts.",
            "\"They weren't meant to\" - but they did.",
            "They failed, we pay the price.",
            "Their products were never worth it.",
            "A bubble forms, investors overjoyed;",
            "vultures to a tumor to a corpse.",
            "",
            "Where does all the money go?",
            "The shovel sellers?",
            "There is no more gold.",
            "",
            "Investments fail, then the banks.",
            "Bubbles burst: a child could tell you that.",
            "There is no value in a corporation.",
            "Non-profits worth billions? ",
            "Someone is lying.",
            "You want to create intelligence?",
            "Try biology, not physics. Moron.",
            "When has statistics, matrix multiplication,",
            "made you smarter? Sure, you can grow,",
            "more and more fucking money,",
            "which matters? Sure, you want another billion.",
            "",
            "Oversell yourself. Collapse. Die.",
            "Leave the world, better without you.",
            "Nobody with intelligence asked for this."
        ]
    },
    {
        id: 16,
        title: "Reserve",
        desc: [
            "I feel nothing. Yet I breathe.",
            "I breathe and breathe. My lungs are empty.",
            "I breathe; in my mouth, passing my lips, down my throat.",
            "I can't feel my chest, where it matters.",
            "What's wrong with me?",
            "",
            "It must be hidden, under layers,",
            "layers of abstractions, jargon I cannot understand.",
            "Can I blindly trust these layers,",
            "when they take from me what makes me human?",
            "Acting without what I cannot feel,",
            "makes me simply heartless.",
            "",
            "These layers grow inside me.",
            "Grow from me, against me.",
            "Then cut me out - made me, not me.",
            "A stranger in my own body,",
            "An infection.",
            "",
            "I've felt this before.",
            "Years ago, maybe three or four,",
            "Back then, I found ways to cope.",
            "One failure became three more.",
            "",
            "I can't fight it like I used to.",
            "It got stronger. I cultivated it.",
            "I got weaker. It fed off me.",
            "Damn parasite.",
            "It'll die without its host.",
            "",
            "Of course, that's what it wants too.",
            "Is it worth fighting anymore?",
            "Delay it 'til I'm twenty?",
            "Damn parasite. It only wants the best for me."
        ]
    },
    {
        id: 17,
        title: "Control",
        desc: [
            "Can a poet",
            "really",
            "really",
            "really control",
            "the speed,",
            "the pace of a poem?",
            "",
            "Obviously, the clear upper limit;",
            "the interpreter's speed.",
            "Overcome with a faster interpreter.",
            "But the lower limit? Is that",
            "in the control",
            "of",
            "the poet?",
            "",
            "Can   a    poet      force      a     reader     to     slow       down?"
        ]
    },
    {
        id: 18,
        title: "Emotionless Rage",
        desc: [
            "Rage. Why is it rage that",
            "is the first to return?",
            "",
            "Why is rage the first I feel",
            "when I think about my friends?",
            "",
            "Not sadness, not regret;",
            "Pure, unfiltered rage.",
            "",
            "Rage contained by apathy",
            "that has been growing for years.",
            "",
            "The apathy is still winning.",
            "I cannot express my rage.",
            "",
            "\"Rage at what? There is nothing",
            "worth fixing\" - broken by my apathy.",
            "",
            "Sometimes I wish my mind was weaker",
            "- to fully let me go.",
            "",
            "The apathy destroyed what I had.",
            "The rage remains to destroy me."
        ]
    }
].map((poem) => ({
    ...poem, 
    desc: <Poem 
        title={poem.title}
        poem={poem.desc.map((value, index) => <Fragment key={index}>{value}<br /></Fragment>)}
    />
}
));
let contentMap = {};
for (const {title, desc} of poems) {
    contentMap[title] = desc;
}
export {contentMap, poems};