module.exports.response = (req, res) => {
    try {
        const { response } = req;
        return res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}