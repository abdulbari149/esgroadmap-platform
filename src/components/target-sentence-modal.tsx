import { Dialog } from "primereact/dialog";
import React from "react";

const TargetSentenceModal: React.FC<{
	showTargetModel: boolean;
	setShowTargetModal: React.Dispatch<React.SetStateAction<boolean>>;
	targetSentence: string;
}> = ({ setShowTargetModal, showTargetModel, targetSentence }) => {
	return (
		<Dialog
			header="Target Sentence"
			visible={showTargetModel}
			style={{ width: "50vw" }}
			onHide={() => {
				if (!showTargetModel) return;
				setShowTargetModal(false);
			}}
		>
			<p className="m-0">{targetSentence}</p>
		</Dialog>
	);
};

export default TargetSentenceModal;
