const bookmarkButton = $(".bookmark");
const checkbox = $(".checkbox");
const completeModal = $("#completeModal");
const continueButton = $("#modal .card-footer button");
const mainCard = $("main .card");
const modal = $("#modal");
const modalCard = $("#modal .card");
const modalCardFooter = $("#modal .card-footer");
const remain = $("main span");
const selectRewardButton = $("main button");
const selectRewardModal = $("#modal .card-header button");

function checkBookmark() {
    bookmarkButton.toggleClass("active");
    if (bookmarkButton.hasClass("active")) {
        bookmarkButton.text("Bookmarked");
    }
    else {
        bookmarkButton.text("Bookmark");
    }
    changeBookmarkButton();
}

function choosePledgeInModal(index) {
    checkbox.removeClass("active");
    checkbox.eq(index).addClass("active");

    modalCardFooter.hide();
    modalCardFooter.eq(index).show();
}

function closeModal() {
    modal.modal("hide");
}

function closeCompleteModal() {
    completeModal.modal("hide");
}

function openModal() {
    modal.modal("show");
}

function openCompleteModal() {
    completeModal.modal("show");
}

function openPledge() {

}

for (let i = 0; i < remain.length; i++) {
    if (remain.eq(i).text() === "0") {
        mainCard.eq(i).addClass("out-of-stock");
        selectRewardButton.eq(i).text("Out of stock").attr("disabled", true);

        modalCard.eq(i + 1).addClass("out-of-stock");
        selectRewardModal.eq(i + 1).attr("disabled", true);
        checkbox.eq(i + 1).attr("disabled", true);
    }
}

function changeBookmarkButton() {
    if ($(window).width() <= 375) {
        bookmarkButton.text("");
    }
    else {
        if (bookmarkButton.hasClass("active")) {
            bookmarkButton.text("Bookmarked");
        }
        else {
            bookmarkButton.text("Bookmark");
        }
    }
}

changeBookmarkButton();
$(window).resize(changeBookmarkButton);

// modalCardFooter.hide();

selectRewardButton.click(function() {
    choosePledgeInModal(selectRewardButton.index($(this)) + 1);
});

selectRewardModal.click(function() {
    choosePledgeInModal(selectRewardModal.index($(this)));
});

checkbox.click(function() {
    choosePledgeInModal(checkbox.index($(this)));
});

continueButton.click(closeModal);